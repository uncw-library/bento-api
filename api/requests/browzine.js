const request = require('request');

const keys = require('../keys');

// get information about the journal titles
function getInformation(issn, title, recordNum) {
  const options = {
    url: `https://public-api.thirdiron.com/public/v1/libraries/1552/search?issns=${issn}`,
    headers: {
      Authorization: `Bearer ${keys.browzine}`,
      Accept: 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      if (err) reject(err);
      else resolve({ browzine: JSON.parse(body).data, title, link: `http://libcat.uncw.edu/record=b${recordNum}~S4` });
    });
  });
}

module.exports = {
  getInformation,
};
