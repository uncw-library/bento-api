const axios = require('axios')

// get information about the digital collections items
async function search (searchTerm, next) {
  const url = makeURL(searchTerm)
  return await axios.get(url)
    .then(res => enrich(res))
    .then(enriched => format(enriched, searchTerm))
    .catch(next)
}

function makeURL (searchTerm) {
  let url = 'https://digitalcollections.uncw.edu/digital/bl/dmwebservices/index.php?q=dmQuery/all/'
  searchTerm.split(' ').forEach((term) => { url += `CISOSEARCHALL^${term}^exact^and!` })
  url += '/title!descri!creato!identi!subjec/nosort/5/1/1/0/0/0/json'
  return url
}

function enrich (res) {
  res.data.records.map((item) => {
    item.image = `http://digitalcollections.uncw.edu/digital/api/singleitem/collection${item.collection}/id/${item.pointer}/thumbnail`
    item.itemUrl = `https://digitalcollections.uncw.edu/digital/collection${item.collection}/id/${item.pointer}`
    return item
  })
  return { items: res.data }
}

function format (enriched, searchTerm) {
  const bundle = {
    total: enriched.items.pager.total,
    searchTerm,
    selection: enriched.items.records
  }
  return bundle
}

module.exports.search = search
