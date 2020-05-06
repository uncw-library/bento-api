const summonApi = require('../api/requests/summon')

async function search (searchTerm) {
  // TODO: add function to process multiple word searchTerms
  const searchParams = 's.pn=&s.ps=&s.q=hi'
  const results = (await summonApi.search(searchParams))
  return results
}

module.exports.search = search
