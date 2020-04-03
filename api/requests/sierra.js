const request = require('request')

const keys = require('../keys')

// authenticate api keys and receive a token
function authenticate () {
  const options = {
    url: 'https://libcat.uncw.edu/iii/sierra-api/v5/token',
    headers: { Authorization: `Basic ${keys.sierra}` }
  }

  return new Promise((resolve, reject) => {
    request.post(options, (err, res, body) => {
      if (err) reject(err)
      else resolve(body)
    })
  })
}

// perform a basic journal search with a given term
function searchJournals (token, term) {
  const options = {
    url: 'https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/query?offset=0&suppressed=false&limit=3',
    headers: { Authorization: `Bearer ${token}` },
    json: {
      queries: [{
        target: { record: { type: 'bib' }, id: 31 }, expr: { op: 'equals', operands: ['-', ''] }
      }, 'and', {
        target: { record: { type: 'bib' }, field: { tag: 'j' } }, expr: { op: 'starts_with', operands: [String(term), ''] }
      }]
    }
  }

  return new Promise((resolve, reject) => {
    request.post(options, (err, res, body) => {
      if (err) reject(err)
      else resolve(body)
    })
  })
}

// perform a basic book/ebook search with a given term
function searchBooksEbooks (token, term) {
  const options = {
    url: `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/search?fields=suppressed%2CmaterialType%2Clocations&text=${term}`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  }

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) reject(err)
      else resolve(JSON.parse(body))
    })
  })
}

// get a list of bib records from given ids
function getBibRecord (token, id) {
  const options = {
    url: `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/${id}/marc`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/marc-in-json'
    }
  }

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) reject(err)
      // we only want the issn (within subfields)
      // each body is an item's marc record, in json format.
      else {
        const filteredObjs = JSON.parse(body).fields.filter(obj => Object.keys(obj)[0] === '022')
        const filteredObjsTitle = JSON.parse(body).fields.filter(obj => Object.keys(obj)[0] === '245')
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
        obj[id] = issn
        obj.title = title
        resolve(obj)
      }
    })
  })
}

module.exports = {
  authenticate,
  searchJournals,
  searchBooksEbooks,
  getBibRecord
}
