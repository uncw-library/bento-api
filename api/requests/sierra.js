const request = require('request')
const axios = require('axios')
const keys = require('../keys')

/*
helper functions
*/

function getLastItem(array) {
  // original function was: array.map(i => i.link.match(/[^/]+$/g)[0]))
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
  const headers = { headers: {'Authorization': `Basic ${keys.sierra}` }}

  return axios.post(url, data, headers)
    .then(res => res.data.access_token)
    .catch(error => console.log(error))
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
  const headers = { headers: {'Authorization': `Bearer ${token}` }}

  return axios.post(url, data, headers)
    .then(res => getLastItem(res.data.entries))
    .catch(error => console.log(error))
}

function getBibRecord (token, id) {
  const url = `https://libcat.uncw.edu:443/iii/sierra-api/v5/bibs/${id}/marc`
  const headers = { headers: {'Authorization': `Bearer ${token}`, 'Accept': 'application/marc-in-json'}}

  return axios.get(url, headers)
    .then(res => parseBib(res))
    .catch(error => console.log(error))
}

function searchBooksEbooks (token, term) {
  const stubbedResponse = '{"count":50,"total":508,"start":0,"entries":[{"relevance":2.4000000953674316,"bib":{"id":"2499425","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"we","name":"UNCW Ed Lab"},{"code":"wj","name":"Juvenile Collection"}]}},{"relevance":2.4000000953674316,"bib":{"id":"3010453","suppressed":false,"materialType":{"code":"g  ","value":"VIDEORECORDING"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"ev","name":"eVideos"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2431836","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wc","name":"Curriculum Materials Center"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2413017","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2452350","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2706290","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2291465","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2651851","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917078","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917107","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917108","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917114","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2625551","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917071","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917074","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917077","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917079","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917080","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917081","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917084","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917089","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917096","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917097","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917100","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917105","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2917106","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wd","name":"Government Resources"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2225280","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2623355","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2620715","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2221899","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wc","name":"Curriculum Materials Center"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2019981","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wj","name":"Juvenile Collection"},{"code":"we","name":"UNCW Ed Lab"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2596334","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2595439","suppressed":false,"materialType":{"code":"h  ","value":"EBOOKS"},"locations":[{"code":"w","name":"UNCW"},{"code":"e","name":"eResources"},{"code":"eb","name":"eBooks"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1956120","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"u","name":"UNCW Upperman Center"},{"code":"uc","name":"UNCW Upperman Center"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2014589","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wg","name":"General Collection"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2134978","suppressed":false,"materialType":{"code":"g  ","value":"VIDEORECORDING"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1950501","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1910960","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1809278","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1817511","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wg","name":"General Collection"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2048081","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"2039807","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1800195","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1959396","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1825661","suppressed":false,"materialType":{"code":"s  ","value":"SERIAL"},"locations":[{"code":"w","name":"UNCW"},{"code":"wp","name":"Periodicals"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1018900","suppressed":false,"materialType":{"code":"s  ","value":"SERIAL"},"locations":[{"code":"w","name":"UNCW"},{"code":"wp","name":"Periodicals"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1265542","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wg","name":"General Collection"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1704565","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wj","name":"Juvenile Collection"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1839320","suppressed":false,"materialType":{"code":"j  ","value":"CD (SOUND)"},"locations":[{"code":"w","name":"UNCW"},{"code":"wa","name":"Videos and Music"}]}},{"relevance":2.4000000953674316,"bib":{"id":"1265906","suppressed":false,"materialType":{"code":"a  ","value":"BOOK"},"locations":[{"code":"w","name":"UNCW"},{"code":"wg","name":"General Collection"}]}}]}'
  return JSON.parse(stubbedResponse)

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

module.exports = {
  authenticate,
  searchJournals,
  searchBooksEbooks,
  getBibRecord
}
