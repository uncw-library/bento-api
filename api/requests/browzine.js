const request = require('request')

const keys = require('../keys')

// get information about the journal titles
function search (issn, title, recordNum) {
  const stubbedResponse = '{"browzine":[{"id":149397,"type":"journals","title":"Historic documents","issn":"0892080X","sjrValue":0,"coverImageUrl":"https://assets.thirdiron.com/default-journal-cover.png","browzineEnabled":false,"externalLink":"http://libcat.uncw.edu/search~S1/?searchtype=X&searcharg=0892-080X&SORT=D&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=l{journal_issn}"}],"title":"Historic documents","link":"http://libcat.uncw.edu/record=b1066502~S4","issn":"0892080X"},{"browzine":[],"title":"Higher education opportunities for minorities and women, annotated selections","link":"http://libcat.uncw.edu/record=b1074149~S4","issn":null}'
  return stubbedResponse

  const options = {
    url: `https://public-api.thirdiron.com/public/v1/libraries/1552/search?issns=${issn}`,
    headers: {
      Authorization: `Bearer ${keys.browzine}`,
      Accept: 'application/json'
    }
  }

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) reject(err)
      else resolve({ browzine: JSON.parse(body).data, title, link: `http://libcat.uncw.edu/record=b${recordNum}~S4`, issn })
    })
  })
}

module.exports.search = search
