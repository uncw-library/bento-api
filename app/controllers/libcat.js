const axios = require('axios')
const cheerio = require('cheerio')

// get information about the digital collections
async function search (searchTerm, searchType, next) {
  const url = makeURL(searchTerm, searchType)
  return await axios.get(url)
    .then(res => extract(res))
    .catch(next)
}

function makeURL (searchTerm, searchType) {
  if (searchType === 'govdocs') {
    return `http://libcat.uncw.edu/search~S4/X?SEARCH=(${searchTerm})&SORT=D&b=wd`
  } else if (searchType === 'videos-music') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=g&b=wa&b=ev`
  }
}

function extract (html) {
  // this approach is a hack, because libcat does not create proper html
  const $ = cheerio.load(html.data)
  const items = $('div.briefcitDetailMain').slice(0, 5)
  const bundle = []
  items.each((k, v) => {
    const rows = $(v).text().split('\n')
    const title = rows[4]
    const author = rows[6]
    const citation = rows[7]
    const url = `https://libcat.uncw.edu${$('h2.briefcitTitle a', v).attr('href')}`
    bundle.push({ title: title, author: author, citation: citation, url: url })
  })
  return bundle
}

module.exports.search = search
