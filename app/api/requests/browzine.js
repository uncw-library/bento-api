const axios = require('axios')
const keys = require('../keys')

function search (title, issn, recordNum, next) {
  const url = `https://public-api.thirdiron.com/public/v1/libraries/1552/search?issns=${issn}`
  const headers = { headers: { Authorization: `Bearer ${keys.browzine}` } }

  return axios.get(url, headers)
    .then(res => ({
      browzine: res.data.data,
      title,
      link: `http://libcat.uncw.edu/record=b${recordNum}~S4`,
      issn,
      recordNum
    }
    ))
    .catch(next)
}

module.exports.search = search
