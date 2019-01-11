const contentDMAPI = require('../api/requests/contentDM');

async function getDigitalCollections(searchTerm) {
  const collections = (await contentDMAPI.getDigitalCollections(searchTerm));

  return collections;
}

module.exports = {
  getDigitalCollections,
};
