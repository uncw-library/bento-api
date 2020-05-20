const axios = require('axios')
const keys = require('../keys')

/*
helper functions
*/

function parseRecordNums (links) {
  // was: return links.map(i => i.link.match(/[^/]+$/g)[0]))
  const recordNums = links.map(i => i.link.split('/')[i.link.split('/').length - 1])
  return recordNums
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

function searchJournals (token, term, next) {
  const url = 'https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/query?offset=0&suppressed=false&limit=3'
  const data = {
    queries: [{
      target: { record: { type: 'bib' }, id: 31 }, expr: { op: 'equals', operands: ['-', ''] }
    }, 'and', {
      target: { record: { type: 'bib' }, field: { tag: 'j' } }, expr: { op: 'starts_with', operands: [`${term}`, ''] }
    }]
  }
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  return axios.post(url, data, headers)
    .then(res => parseRecordNums(res.data.entries))
    .catch(next)
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
