const sierraApi = require('../api/requests/sierra')
const browzineApi = require('../api/requests/browzine')

async function search (searchTerm) {
  const token = (await sierraApi.authenticate())
  const bibLinks = (await sierraApi.searchJournals(token, searchTerm))

  const enrichedRecords = (await Promise.all(
    bibLinks.map(id => sierraApi.getBibRecord(token, id)
      .then(record => {
        const recordNum = Object.keys(record)[0]
        return browzineApi.search(record[recordNum], record.title, recordNum)
      })
    )
  ))
  return enrichedRecords
}

module.exports.search = search
