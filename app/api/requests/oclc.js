const axios = require('axios')
const RSSParser = require('rss-parser')
const cheerio = require('cheerio')

const keys = require('../keys')

async function search (searchTerm, searchType, next) {
  const url = makeURL(searchTerm, searchType)
  return await axios.get(url)
    .then(res => extract(res.data))
    .catch(next)
}

function makeURL (searchTerm, searchType) {
  const deQuotedSearchTerm = searchTerm.replace('"', '').replace('%22', '')
  if (searchType === 'books-ebooks') {
    return `http://www.worldcat.org/webservices/catalog/search/worldcat/opensearch?q=srw.dt+exact+%22bks%22+or+srw.dt+exact+%22url%22+and+srw.ti=%22${deQuotedSearchTerm}%22&format=rss&wskey=${keys.OCLC}&cformat=mla`
  } else if (searchType === 'videos-music') {
    return `http://www.worldcat.org/webservices/catalog/search/worldcat/opensearch?q=srw.dt+exact+%22vis%22+or+srw.dt+exact+%22sco%22+or+srw.dt+exact+%22rec%22+and+srw.ti+all+%22${deQuotedSearchTerm}%22&format=rss&wskey=${keys.OCLC}&cformat=mla`
  }
}

async function extract (data) {
  const parserOptions = {
    customFields: {
      item: ['dc:identifier', 'oclcterms:recordIdentifier']
    }
  }
  const parser = new RSSParser(parserOptions)
  const rss = await parser.parseString(data)
  const worldcatItems = await makeTwoGoodItems(rss)
  return worldcatItems
}

async function makeTwoGoodItems (rss) {
  // we only want two items from worldcat
  // we'll also exclude items in our holdings
  // so looping over rss items until we get two good matches
  const goodItems = []
  for (const rssItem of rss.items) {
    if (goodItems.length === 2) {
      break
    }

    const parsed = {
      title: rssItem.title || '',
      author: '',
      isbn: '',
      oclc: rssItem['oclcterms:recordIdentifier'] || '',
      publisher: '',
      pubDate: '',
      resourceType: '',
      illiadUrl: '',
      // nhcUrl: '',
      // cfccUrl: '',
      worldcatUrl: rssItem.link || ''
    }

    if (await locationIsNXW(parsed.oclc)) {
      continue
    }

    // get author
    if (rssItem.author) {
      parsed.author = rssItem.author.name || ''
    }

    // get isbn
    const dcIdentifier = rssItem['dc:identifier']
    if (dcIdentifier && (dcIdentifier.substring(0, 8) === 'urn:ISBN')) {
      parsed.isbn = dcIdentifier.substring(9)
    }
    // edge-case when isbn is only ten digit
    if (parsed.isbn.substring(11, 12) === 'n') {
      parsed.isbn = parsed.isbn.substring(9, 19)
    }

    // get citation info
    const contentEncodedSnippet = rssItem['content:encodedSnippet']
    if (contentEncodedSnippet) {
      const extraParts = parseContentEncodedSnippet(contentEncodedSnippet, parsed.title)
      parsed.publisher = extraParts.publisher || ''
      parsed.pubDate = extraParts.date || ''
      parsed.resourceType = extraParts.resourceType || ''
    }

    // make illiad url
    parsed.illiadUrl = encodeURI(`https://illiad.uncw.edu/illiad.dll?Action=10&Form=30&url_ver=Z39.88-2004&rfr_id=info:sid/BENTO&rft_val_fmt=info:ofi/fmt:kev:mtx:book&rft.genre=book&req_dat=<sessionid>&rfe_dat=<accessionnumber>${parsed.oclc}</accessionnumber>&rft_id=info:oclcnum/${parsed.oclc}&rft_id=urn:ISBN:${parsed.isbn}&rft.btitle=${parsed.title}&rft.date=${parsed.pubDate}&rft.au=${parsed.author}&rft.isbn=${parsed.isbn}&rft.genre=book&req_id=info:rfa/oclc/institutions/105484`)

    goodItems.push(parsed)
  }
  return goodItems
}

async function locationIsNXW (oclc) {
  // NXW is uncw-wilmington.  skip items that oclc says are in our holdings
  const url = `http://www.worldcat.org/webservices/catalog/content/libraries/${oclc}?location=28403&wskey=${keys.OCLC}`
  const page = await axios(url)
  // cheerio works like jQuery, for parsing an html structure
  const $ = cheerio.load(page.data, { xmlMode: true })
  const institutionIdentifierElems = $('institutionIdentifier value')
  for (const elem of institutionIdentifierElems) {
    if ($(elem).text() === 'NXW') {
      return true
    }
  }
  return false
}

function parseContentEncodedSnippet (text, title) {
  // ugly manual parsing of ugly source data
  // the worldcat API doesn't give these as separate fields, but as a citation
  // so we have to parse out the portions of the citation
  const posLastPeriod = text.lastIndexOf('.')
  const posSecondLastPeriod = text.lastIndexOf('.', posLastPeriod - 1)
  const posLastComma = text.lastIndexOf(',')

  let resourceType = text.substring(posSecondLastPeriod + 1)
  const textMinusResourceType = text.split(resourceType)[0]
  let date = textMinusResourceType.slice(posLastComma)
  const textMinusdate = textMinusResourceType.slice(0, posLastComma)
  let publisher = textMinusdate.split(title)[1]
  if (publisher) {
    publisher = publisher.replace('.', '').trim()
  }
  if (date) {
    date = date.replace(',', '').replace('.', '').trim()
  }
  if (resourceType) {
    resourceType = resourceType.replace('.', '').trim()
  }
  return {
    publisher,
    date,
    resourceType
  }
}

module.exports = {
  search
}
