const axios = require('axios')

// get information about the digital collections
function search (searchTerm) {
  const url = makeURL(searchTerm)
  return axios.get(url)
    .then(res => enrich(res))
}

function makeURL (searchTerm) {
  let url = 'https://digitalcollections.uncw.edu/digital/bl/dmwebservices/index.php?q=dmQuery/all/'
  searchTerm.split(' ').forEach((term) => { url += `CISOSEARCHALL^${term}^exact^and!` })
  url += '/title!descri!creato!identi!subjec/nosort/5/1/1/0/0/0/json'
  return url
}

function enrich (res) {
  res.data.records.map((collection) => {
    const image = `http://digitalcollections.uncw.edu/digital/api/singleitem/collection${collection.collection}/id/${collection.pointer}/thumbnail`
    collection.image = image
    return { ...collection, image }
  })
  return { collections: res.data }
}

module.exports.search = search

// enpoint expect data like:
// {
//   "collections":
//   {
//     "pager":
//     {
//       "start": "1",
//       "maxrecs": "5",
//       "total": 11065
//     },
//     "records": [
//     {
//       "collection": "/honors",
//       "pointer": 1025,
//       "filetype": "pdf",
//       "parentobject": -1,
//       "title": "A comparison of North Carolina and federal income tax laws affecting individuals, partnerships and corporations",
//       "descri": "Includes bibliographical references; Business/Economics Dept",
//       "creato": "Hoffman, Herbert Leon",
//       "identi": "HoffmanHerbertLeon1974",
//       "subjec": "Income tax--North Carolina.; Honors paper (Department of Business and Economics)",
//       "find": "1733.pdf",
//       "image": "http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/1025/thumbnail"
//     },
//     {
//       "collection": "/honors",
//       "pointer": 1079,
//       "filetype": "pdf",
//       "parentobject": -1,
//       "title": "Assessment of surface temperature patterns on the dorsal fin of bottlenose dolphins (Tursiops truncatus) using infrared thermography",
//       "descri": "Includes bibliographical references (Leaves: 54-55); Honors paper Department of Biological Sciences",
//       "creato": "Barbieri, Michelle Marie",
//       "identi": "BarbieriMichelleMarie2002",
//       "subjec": "Bottlenose dolphin--Research.; Thermography.; Honors paper (Department of Biological Sciences)",
//       "find": "435.pdf",
//       "image": "http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/1079/thumbnail"
//     }
//   }
// }
