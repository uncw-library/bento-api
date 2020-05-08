const summonApi = require('../api/requests/summon')

async function search (searchTerm, next) {
  // available query elements:  https://developers.exlibrisgroup.com/summon/apis/searchapi/query/
  let queryParts = [
    's.fvf=IsFullText,true',
    's.fvf=isScholarly,true',
    's.fvf=ContentType,Journal Article',
    's.hl=false',
    's.ho=true',
    's.l=en',
    's.pn=0',
    's.ps=5',
    `s.q=${searchTerm}`,
  ]
  queryParts = queryParts.sort()
  const query = queryParts.join('&')
  const results = (await summonApi.search(query, next))
  const trimmed = trimResults(results)
  return await trimmed
}

function trimResults (results) {
  const trimmedItems = []
  for (const doc of Object.values(results.documents)) {
    const trimmedItem = {
      date: formatDate(doc),
      link: getNestedObject(doc, ['link']),
      title: getNestedObject(doc, ['Title', '0']),
      publication: getNestedObject(doc, ['PublicationTitle', '0']),
      vol: getNestedObject(doc, ['Volume', '0']),
      issue: getNestedObject(doc, ['Issue', '0']),
      page: getNestedObject(doc, ['StartPage', '0'])
    }
    trimmedItems.push(trimmedItem)
  }
  return trimmedItems
}

function truncateAuthors (doc) {
  const authorList = getNestedObject(doc, ['Author'])
  if (authorList.length === 0) {
    return ''
  }
  else if (authorList.length === 1) {
    return authorList[0]
  }
  else if (authorList.length === 2) {
    return authorList.join(' and ')
  }  
  else {
    return `${authorList[0]}; ${authorList[1]}; ${authorList[2]} and others` 
  }
}

function formatDate (doc) {
  const date = getNestedObject(doc, ['PublicationDate_xml', '0', 'text'])
  const year = getNestedObject(doc, ['PublicationDate_xml', '0', 'year'])
  const month = getNestedObject(doc, ['PublicationDate_xml', '0', 'month'])
  const day = getNestedObject(doc, ['PublicationDate_xml', '0', 'day'])
  const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

  if (year && year.length !== 0) {
    if (month && month.length !== 0) {
      const monthInt = parseInt(month)
      const monthText = months[monthInt]
      if (day && day.length !== 0) {
        return `${monthText} ${day}, ${year}`
        } else {
        return `${monthText} ${year}` 
        }
      } else {
      return `${year}`
      }
    }
}

function getNestedObject (nestedObj, pathArr) {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
}

module.exports.search = search
