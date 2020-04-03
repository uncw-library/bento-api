const contentDMAPI = require('../api/requests/contentDM')

async function getDigitalCollections (searchTerm) {
  const collections = (await contentDMAPI.getDigitalCollections(searchTerm))

  collections.collections.records = collections.collections.records.map((collection) => {
    const image = `http://digitalcollections.uncw.edu/digital/api/singleitem/collection${collection.collection}/id/${collection.pointer}/thumbnail`
    return { ...collection, image }
  })
  return collections
}

module.exports = getDigitalCollections
