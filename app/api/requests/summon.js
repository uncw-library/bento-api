const axios = require('axios')
const crypto = require('crypto')
const keys = require('../keys')

async function search (query, next) {
  const accept = 'application/json'
  const date = (new Date()).toGMTString()
  const host = 'api.summon.serialssolutions.com'
  const path = '/2.0.0/search'
  const id = [accept, date, host, path, query].join('\n') + '\n'
  const hmac = crypto.createHmac('sha1', keys.SUMMON_key)
  const hash = hmac.update(id)
  const digest = hash.digest('base64')

  var url = `http://${host}${path}?${query}`
  var headers = {
    headers: {
      Accept: accept,
      'x-summon-date': date,
      Host: host,
      Authorization: `Summon ${keys.SUMMON_id};${digest}`
    }
  }
  return await axios.get(url, headers)
    .then(res => res.data)
    .catch(next)
}

module.exports.search = search
