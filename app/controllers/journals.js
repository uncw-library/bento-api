const sierraApi = require('../api/requests/sierra')
const browzineApi = require('../api/requests/browzine')

async function search (searchTerm, next) {
  const token = (await sierraApi.authenticate(next))
  const [recordNums, totalCount] = (await sierraApi.searchJournals(token, searchTerm, next))

  const enrichedRecords = (await Promise.all(
    recordNums.map(recordNum => sierraApi.getBibRecord(token, recordNum, next)
      .then(res => parseBib(res))
      .then(issnsTitles => {
        return browzineApi.search(issnsTitles.title, issnsTitles.issn, recordNum, next)
      })
    )
  ))
  const bundle = {
    total: totalCount,
    selection: enrichedRecords
  }
  return bundle
}

function parseBib (res) {
  // each data is an item's marc record, in json format.
  // we only want the issn & title (from subfields)
  const issnObjs = res.data.fields.filter(obj => Object.keys(obj)[0] === '022')
  const titleObjs = res.data.fields.filter(obj => Object.keys(obj)[0] === '245')
  let issn, title
  try {
    issn = issnObjs[0]['022'].subfields[0].a.replace(/-/g, '')
  } catch (e) {
    issn = null
  };
  try {
    title = titleObjs[0]['245'].subfields[0].a
  } catch (e) {
    title = null
  }
  return { issn, title }
}

module.exports.search = search
