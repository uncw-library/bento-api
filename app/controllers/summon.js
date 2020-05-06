const summonApi = require('../api/requests/summon')

async function search (searchTerm, next) {
  // TODO: add function to process multiple word searchTerms
  const searchParams = 's.pn=&s.ps=&s.q=hi'
  const results = (await summonApi.search(searchParams, next))
  return await results
}

module.exports.search = search
