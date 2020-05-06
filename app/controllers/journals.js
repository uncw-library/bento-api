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


// returns data like:
// [
// {
//   "browzine": [],
//   "title": "Highway and road mileage /",
//   "link": "http://libcat.uncw.edu/record=bid~S4",
//   "issn": null
// },
// {
//   "browzine": [
//   {
//     "id": 149397,
//     "type": "journals",
//     "title": "Historic documents",
//     "issn": "0892080X",
//     "sjrValue": 0,
//     "coverImageUrl": "https://assets.thirdiron.com/default-journal-cover.png",
//     "browzineEnabled": false,
//     "externalLink": "http://libcat.uncw.edu/search~S1/?searchtype=X&searcharg=0892-080X&SORT=D&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=l{journal_issn}"
//   }],
//   "title": "Historic documents",
//   "link": "http://libcat.uncw.edu/record=bid~S4",
//   "issn": "0892080X"
// },
// {
//   "browzine": [],
//   "title": "Higher education opportunities for minorities and women, annotated selections",
//   "link": "http://libcat.uncw.edu/record=bid~S4",
//   "issn": null
// }]
