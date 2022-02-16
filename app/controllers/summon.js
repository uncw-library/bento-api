const summonApi = require('../api/requests/summon')

async function search (searchTerm, searchType, next) {
  // available query elements:  https://developers.exlibrisgroup.com/summon/apis/searchapi/query/
  const queryOptions = {
    scholarly: [
      's.fvf=IsFullText,true',
      's.fvf=isScholarly,true',
      's.fvf=ContentType,Journal Article',
      's.hl=false',
      's.ho=true',
      's.l=en',
      's.pn=0',
      's.ps=5',
      `s.q=${searchTerm}`
    ],
    newsMags: [
      's.fvf=IsFullText,true',
      's.fvf=ContentType,Magazine Article',
      's.fvf=ContentType,Newspaper Article',
      's.hl=false',
      's.ho=true',
      's.l=en',
      's.pn=0',
      's.ps=5',
      `s.q=${searchTerm}`
    ],
    datasets: [
      's.fvf=IsFullText,true',
      's.fvf=ContentType,Data Set',
      's.hl=false',
      's.ho=true',
      's.l=en',
      's.pn=0',
      's.ps=5',
      `s.q=${searchTerm}`
    ]
  }

  const params = queryOptions[searchType]
  const sorted = params.sort()
  const query = sorted.join('&')
  const results = (await summonApi.search(query, next))
  const trimmed = trimResults(results)
  const formatted = format(results.recordCount, trimmed)
  return await formatted
}

function trimResults (results) {
  // "" is default value if a doc is missing a field
  const trimmedItems = []
  for (const doc of Object.values(results.documents)) {
    const trimmedItem = {
      title: getNestedObject(doc, ['Title', '0']),
      author: truncateAuthors({
        authorList: getNestedObject(doc, ['Author'])
      }),
      date: formatDate({
        year: getNestedObject(doc, ['PublicationDate_xml', '0', 'year']),
        month: getNestedObject(doc, ['PublicationDate_xml', '0', 'month']),
        day: getNestedObject(doc, ['PublicationDate_xml', '0', 'day'])
      }),
      url: getNestedObject(doc, ['link']),
      image: '',
      subtitle: getNestedObject(doc, ['Subtitle', '0']),
      publication: getNestedObject(doc, ['PublicationTitle', '0']),
      vol: getNestedObject(doc, ['Volume', '0']),
      issue: getNestedObject(doc, ['Issue', '0']),
      page: getNestedObject(doc, ['StartPage', '0'])
    }
    trimmedItems.push(trimmedItem)
  }
  return trimmedItems
}

function truncateAuthors (authorObj) {
  const authorList = authorObj.authorList
  if (authorList === undefined) {
    return ''
  }
  if (authorList && authorList.length === 0) {
    return ''
  } else if (authorList && authorList.length === 1) {
    return authorList[0]
  } else if (authorList && authorList.length === 2) {
    return authorList.join(' and ')
  } else if (authorList && authorList.length === 3) {
    return `${authorList[0]}; ${authorList[1]}; ${authorList[2]}`
  } else {
    return `${authorList[0]}; ${authorList[1]}; ${authorList[2]} and others`
  }
}

function formatDate (yearMonthDay) {
  const year = yearMonthDay.year
  const month = yearMonthDay.month
  const day = yearMonthDay.day
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
  } else {
    return ''
  }
}

function getNestedObject (nestedObj, pathArr) {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : '', nestedObj)
}

function format (total, trimmed) {
  const bundle = {
    total: total,
    selection: trimmed
  }
  return bundle
}

module.exports.search = search
