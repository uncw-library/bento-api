const request = require('request');

// get information about the digital collections
function getDigitalCollections(searchTerm) {
  let url = 'https://digitalcollections.uncw.edu/digital/bl/dmwebservices/index.php?q=dmQuery/all/';
  searchTerm.split(' ').forEach((term) => { url += `CISOSEARCHALL^${term}^exact^and!`; });
  url += '/title!descri!creato!identi!subjec/nosort/10/1/1/0/0/0/json';

  console.log(url);

  const options = {
    url,
    headers: {
      Accept: 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    console.log(options);
    request.get(options, (err, res, body) => {
      if (err) reject(err);
      else resolve({ collections: JSON.parse(body) });
    });
  });
}

module.exports = {
  getDigitalCollections,
};
