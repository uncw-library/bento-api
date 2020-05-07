const summonApi = require('../api/requests/summon')

async function search (searchTerm, next) {
  // TODO: add function to process no/multiple word searchTerms
  const query = `s.q=${searchTerm}`
  const encodedQuery = encodeURI(query)
  const results = (await summonApi.search(encodedQuery, next))
  if (results !== undefined) {
    const trimmed = trimResults(results)
    return await trimmed
  }
}

function trimResults (results) {
  // TODO: add func to handle no/multiple resultsItems.key values
  const trimmedItems = []
  for (const resultsItems of Object.values(results.documents)) {
    const trimmedItem = {}
    trimmedItem.link = getNestedObject(resultsItems, ['link'])
    trimmedItem.title = getNestedObject(resultsItems, ['Title', '0'])
    trimmedItem.author = getNestedObject(resultsItems, ['Author', '0'])
    trimmedItem.publication = getNestedObject(resultsItems, ['PublicationTitle', '0'])
    trimmedItem.date = getNestedObject(resultsItems, ['PublicationDate_xml', '0', 'text'])
    trimmedItem.vol = getNestedObject(resultsItems, ['Volume', '0'])
    trimmedItem.issue = getNestedObject(resultsItems, ['Issue', '0'])
    trimmedItem.page = getNestedObject(resultsItems, ['StartPage', '0'])
    trimmedItems.push(trimmedItem)
  }
  return trimmedItems
  // link,  title, author, randall_source
}

function getNestedObject (nestedObj, pathArr) {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
}

module.exports.search = search
