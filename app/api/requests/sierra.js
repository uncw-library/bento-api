const axios = require('axios')
const keys = require('../keys')

/*
helper functions
*/

function getLastItem (array) {
  // was: return array.map(i => i.link.match(/[^/]+$/g)[0]))
  return array.map(i => i.link.split('/')[i.link.split('/').length - 1])
}

function parseBib (res) {
  // each data is an item's marc record, in json format.
  // we only want the issn & title (from subfields)
  const filteredObjs = res.data.fields.filter(obj => Object.keys(obj)[0] === '022')
  const filteredObjsTitle = res.data.fields.filter(obj => Object.keys(obj)[0] === '245')
  var issn, title
  try {
    issn = filteredObjs[0]['022'].subfields[0].a.replace(/-/g, '')
  } catch (e) {
    issn = null
  };
  try {
    title = filteredObjsTitle[0]['245'].subfields[0].a
  } catch (e) {
    title = null
  }
  const obj = {}
  obj.id = issn
  obj.title = title
  return obj
}

/*
exported functions
*/

function authenticate () {
  const url = 'https://libcat.uncw.edu/iii/sierra-api/v5/token'
  const data = {}
  const headers = { headers: { Authorization: `Basic ${keys.sierra}` } }

  return axios.post(url, data, headers)
    .then(res => res.data.access_token)
    .catch(next)
}

function searchJournals (token, term) {
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
    .then(res => getLastItem(res.data.entries))
    .catch(next)
}

function getBibRecord (token, id) {
  const url = `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/${id}/marc`
  const headers = { headers: { Authorization: `Bearer ${token}`, Accept: 'application/marc-in-json' } }

  return axios.get(url, headers)
    .then(res => parseBib(res))
    .catch(next)
}

function searchBooksEbooks (token, term) {
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
