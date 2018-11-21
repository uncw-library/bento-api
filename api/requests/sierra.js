const request = require('request');

const keys = require('../keys');

// authenticate api keys and receive a token
function authenticate() {
  const options = {
    url: 'https://libcat.uncw.edu/iii/sierra-api/v5/token',
    headers: {
      Authorization: `Basic ${keys.sierra}`,
    },
  };

  return new Promise((resolve, reject) => {
    request.post(options, (err, res, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });
}

// perform a basic search with a given term
function searchTerm(token, term) {
  const options = {
    url: 'https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/query?offset=0&suppressed=false&limit=3',
    headers: {
      Authorization: `Bearer ${token}`,

    },
    json: {
      target: {
        record: {
          type: 'bib',
        },
        field: {
          tag: 'j',
        },
      },
      expr: {
        op: 'starts_with',
        operands: [
          String(term),
          '',
        ],
      },
    },
  };

  return new Promise((resolve, reject) => {
    request.post(options, (err, res, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });
}

// get a list of bib records from given ids
function getBibRecord(token, id) {
  const options = {
    url: `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/${id}/marc`,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/marc-in-json',
    },
  };

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) reject(err);
      // we only want the issn (within subfields)
      else {
        const filteredObjs = JSON.parse(body).fields.filter(obj => Object.keys(obj)[0] === '022');
        const issn = filteredObjs.length ? filteredObjs[0]['022'].subfields[0].a.replace(/-/g, '') : null;
        const obj = {};
        obj[id] = issn;
        resolve(obj);
      }
    });
  });
}

module.exports = {
  authenticate,
  searchTerm,
  getBibRecord,
};
