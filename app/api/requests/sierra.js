const axios = require('axios')
const keys = require('../keys')

/*
helper functions
*/

function parseRecordNums (links, totalCount) {
  // was: return links.map(i => i.link.match(/[^/]+$/g)[0]))
  const selection = links.map(i => i.link.split('/')[i.link.split('/').length - 1])
  return [selection, totalCount]
}

/*
exported functions
*/

function authenticate (next) {
  const url = 'https://libcat.uncw.edu/iii/sierra-api/v5/token'
  const data = {}
  const headers = { headers: { Authorization: `Basic ${keys.sierra}` } }

  return axios.post(url, data, headers)
    .then(res => res.data.access_token)
    .catch(next)
}

async function searchJournals (token, term, next) {
  // magic number is limit of items to search
  const totalCount = (await fetchJournals(token, term, 5000, next)
    .then(res => res.data.total))
  return fetchJournals(token, term, 5, next)
    .then(res => parseRecordNums(res.data.entries, totalCount))
    .catch(next)
}

async function fetchJournals (token, term, limit, next) {
  const url = `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/query?offset=0&suppressed=false&limit=${limit}`
  const data = {
    queries: [{
      target: { record: { type: 'bib' }, id: 31 }, expr: { op: 'equals', operands: ['-', ''] }
    }, 'and', {
      target: { record: { type: 'bib' }, field: { tag: 'j' } }, expr: { op: 'starts_with', operands: [`${term}`, ''] }
    }]
  }
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  return axios.post(url, data, headers)
}

function getBibRecord (token, id, next) {
  const url = `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/${id}/marc`
  const headers = { headers: { Authorization: `Bearer ${token}`, Accept: 'application/marc-in-json' } }

  return axios.get(url, headers)
    .catch(next)
}

function searchBooksEbooks (token, term, next) {
  const url = `https://libcat.uncw.edu/iii/sierra-api/v5/bibs/search?fields=suppressed%2CmaterialType%2Clocations&text=${term}`
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  return axios.get(url, headers)
    .then(res => res.data)
    .catch(next)
}

module.exports = {
  authenticate,
  searchJournals,
  searchBooksEbooks,
  getBibRecord
}
