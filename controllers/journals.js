const sierraApi = require('../api/requests/sierra')
const browzineApi = require('../api/requests/browzine')

async function getJournals (searchTerm) {
  const token = JSON.parse(await sierraApi.authenticate()).access_token
  const bibLinks = (await sierraApi.searchJournals(token, searchTerm))
  const ids = []
  const bibRecords = []
  const browzineRecords = []

  bibLinks.entries.forEach(entry => ids.push(entry.link.match(/[^/]+$/g)[0]))

  ids.forEach((id) => {
    const bibRecord = (sierraApi.getBibRecord(token, id))
    bibRecords.push(bibRecord)
  });

  (await Promise.all(bibRecords)).forEach((record) => {
    const recordNum = Object.keys(record)[0]
    const browzineRecord = browzineApi.getInformation(record[recordNum], record.title, recordNum)
    browzineRecords.push(browzineRecord)
  })

  const response = (await Promise.all(browzineRecords))
  return response
}

module.exports.getJournals = getJournals
