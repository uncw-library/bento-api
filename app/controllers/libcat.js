const axios = require('axios')
const cheerio = require('cheerio')

const oclc = require('../api/requests/oclc')

/*
  This algorithm is the least worst option.
  It'd be better to grab the search results from sierra as a db query or API call,
    but those are very slow & complicated.
    Also the sierra API & db queries don't have good results ranking.
  The frontend sierra page does have good results ranking, is fast, and handles quotation marks & "AND"/"OR" etc.
    So we're loading the sierra searchpage, then parsing the html for the <divs> we want.
    This is fragile.  If the html changed <div class="newName"> then this app would break.
    Also the logic in extract() is overcomplicated to make up for the messiness.
  But it's the fast way & it's also gives the best results.
  Maybe later sierra will make an API that gives this good data that we're having to scrape from the html.
*/

async function search (searchTerm, searchType, next) {
  if (!searchTerm.trim().length || !searchType.trim().length) {
    const bundle = {
      total: 0,
      selection: [],
      worldcat: []
    }
    return bundle
  }

  const url = makeURL(searchTerm, searchType)
  return await axios.get(url)
    .then(res => extract(res.data, url))
    .then(bundle => doWorldcatIfEmpty(bundle, searchTerm, searchType))
    .then(bundle => format(bundle, searchTerm))
    .catch(next)
}

function makeURL (searchTerm, searchType) {
  if (searchType === 'books-ebooks') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb`
  } else if (searchType === 'govdocs') {
    return `http://libcat.uncw.edu/search~S4/X?SEARCH=(${searchTerm})&SORT=D&b=wd`
  } else if (searchType === 'videos-music') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=g&m=j&m=n&b=ev&b=wa`
  }
}

function extract (html, currentUrl) {
  // cheerio works like jQuery, for parsing an html structure
  const $ = cheerio.load(html)
  const pageType = whatPageType($)
  /*
    pageType will be 'singleItem' or 'multiItem'
    a singleItem example:  https://libcat.uncw.edu/search~S4/?searchtype=X&searcharg=%22Zero+to+maker+%3A+learn+%28just+enough%29+to+make+%28just+about%29+anything%22&sortdropdown=-&SORT=DZ&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=X%22zero+to+maker%22%26SORT%3DDZ
    a multiItem example:  https://libcat.uncw.edu/search~S4/?searchtype=X&searcharg=hi&sortdropdown=-&SORT=DZ&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=Xhi%26SORT%3DDZ
  */
  if (pageType === 'multiItem') {
    /*
      When there is more than one result, LibCat gives a completely different page display.
      We're capturing that display's elements here.
    */
    const allItems = $('div.briefcitDetailMain')
    const items = allItems.slice(0, 5)
    const bundle = {
      total: makeMultiPageTotal($),
      selection: [],
      worldcat: []
    }
    items.each((k, v) => {
      const title = $(v).find('h2.briefcitTitle a').text().trim()
      const author = $(v).find('div.author').text().trim()
      const citation = $(v).find('div.imprint').text().trim()
      const url = `https://libcat.uncw.edu${$('h2.briefcitTitle a', v).attr('href')}`
      const image = `${$(v).closest('tr').find('.briefcitJacket img').attr('src')}`
      let itemUrl = `${$(v).find('div.briefcitActions a').attr('href')}`
      if (itemUrl === 'undefined') { itemUrl = '' }
      bundle.selection.push({ title, author, citation, url, image, itemUrl })
    })
    return bundle
  } else if (pageType === 'singleItem') {
    /*
      When there is only one result, LibCat gives a completely different page display
      We're capturing that display's elements here.
    */
    const bundle = {
      total: '1',
      selection: [
        {
          title: '',
          author: '',
          citation: '',
          url: encodeURI(currentUrl),
          image: $('.bibDisplayJacket a img').attr('src'),
          itemUrl: ''
        }
      ],
      worldcat: []
    }
    const allColumns = $('.bibInfoData')
    for (const c of allColumns) {
      const previousSiblingText = $(c).prev().text()
      if (previousSiblingText === 'Title') {
        bundle.selection[0].title = $(c).text().trim()
        continue
      }
      if (previousSiblingText === 'Author') {
        bundle.selection[0].author = $(c).text().trim()
        continue
      }
      if (previousSiblingText === 'Author') {
        bundle.selection[0].author = $(c).text().trim()
        continue
      }
      if (previousSiblingText === 'Publisher') {
        bundle.selection[0].citation = $(c).text().trim()
        continue
      }
    }
    bundle.selection[0].itemUrl = `${$('table.bibLinks tbody tr td a').attr('href')}`
    if (bundle.selection[0].itemUrl === 'undefined') { bundle.selection[0].itemUrl = '' }
    return bundle
  }
}

function whatPageType ($) {
  const elemOnlyOnSinglePage = $('.bibInfoData')
  if (elemOnlyOnSinglePage.length) {
    return 'singleItem'
  }
  return 'multiItem'
}

function makeMultiPageTotal ($) {
  const totalFullPage = $(' .browseHeaderData').text().split('of ').at(-1).trim().replace(')', '')
  if (totalFullPage !== '') {
    return totalFullPage
  }
  return '0'
}

async function doWorldcatIfEmpty (bundle, searchTerm, searchType) {
  /*
    if bundle has any items, the bundle is fine & can be sent forward
    otherwise, add worldcat results
  */
  if (parseInt(bundle.total) > 0) {
    return bundle
  }
  /*
    if bundle is govdocs searchType, then dont try a worldcat search.
  */
  if (searchType === 'govdocs') {
    return bundle
  }

  const worldcat = await oclc.search(searchTerm, searchType)
  bundle.worldcat = worldcat
  return bundle
}

function format (bundle, searchTerm) {
  return {
    searchTerm,
    ...bundle
  }
}

module.exports.search = search
