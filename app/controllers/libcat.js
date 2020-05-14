const axios = require('axios')
const cheerio = require('cheerio')

async function search (searchTerm, searchType, next) {
  const url = makeURL(searchTerm, searchType)
  return await axios.get(url)
    .then(res => extract(res.data))
    .catch(next)
}

function makeURL (searchTerm, searchType) {
  if (searchType === 'books-ebooks') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb`
  } else if (searchType === 'govdocs') {
    return `http://libcat.uncw.edu/search~S4/X?SEARCH=(${searchTerm})&SORT=D&b=wd`
  } else if (searchType === 'videos-music') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=g&b=wa&b=ev`
  }
}

function extract (html) {
  // cheerio works like jQuery, for parsing an html structure
  const $ = cheerio.load(html)
  const items = $('div.briefcitDetailMain').slice(0, 5)
  const bundle = []
  items.each((k, v) => {
    const title = $(v).find('h2.briefcitTitle a').text().trim()
    const author = $(v).find('div.author').text().trim()
    const citation = $(v).find('div.imprint').text().trim()
    const url = `https://libcat.uncw.edu${$('h2.briefcitTitle a', v).attr('href')}`
    const image = `${$(v).closest('tr').find('.briefcitJacket img').attr('src')}`
    bundle.push({ title: title, author: author, citation: citation, url: url, image: image })
  })
  return bundle
}

module.exports.search = search
