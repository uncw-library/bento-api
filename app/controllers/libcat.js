const axios = require('axios')
const cheerio = require('cheerio')

async function search (searchTerm, searchType, next) {
  const url = makeURL(searchTerm, searchType)
  return await axios.get(url)
    .then(res => extract(res.data, url))
    .catch(next)
}

function makeURL (searchTerm, searchType) {
  if (searchType === 'books-ebooks') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=a&m=c&m=h&b=wg&b=wj&b=wr&b=wf&b=wh&b=wb&b=wc&b=we&b=wi&b=wl&b=wn&b=ws&b=wu&b=wv&b=eb`
  } else if (searchType === 'govdocs') {
    return `http://libcat.uncw.edu/search~S4/X?SEARCH=(${searchTerm})&SORT=D&b=wd`
  } else if (searchType === 'videos-music') {
    return `http://libcat.uncw.edu/search/X?SEARCH=(${searchTerm})&searchscope=4&SORT=D&m=g&m=j&m=n&b=ev&b=wa`
  }
}

function extract (html, currentUrl) {
  // cheerio works like jQuery, for parsing an html structure
  const $ = cheerio.load(html)
  const pageType = whatPageType($)
  console.log(pageType)
  // pageType will be 'singleItem' or 'multiItem'
  // a singleItem example:  https://libcat.uncw.edu/search~S4/?searchtype=X&searcharg=%22Zero+to+maker+%3A+learn+%28just+enough%29+to+make+%28just+about%29+anything%22&sortdropdown=-&SORT=DZ&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=X%22zero+to+maker%22%26SORT%3DDZ
  // a multiItem example:  https://libcat.uncw.edu/search~S4/?searchtype=X&searcharg=hi&sortdropdown=-&SORT=DZ&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=Xhi%26SORT%3DDZ

  if (pageType === 'multiItem') {
    // When there is more than one result, LibCat gives a completely different page display.
    // We're capturing that display's elements here.
    const allItems = $('div.briefcitDetailMain')
    const items = allItems.slice(0, 5)
    const bundle = {
      total: makeMultiPageTotal($),
      selection: []
    }
    items.each((k, v) => {
      const title = $(v).find('h2.briefcitTitle a').text().trim()
      const author = $(v).find('div.author').text().trim()
      const citation = $(v).find('div.imprint').text().trim()
      const url = `https://libcat.uncw.edu${$('h2.briefcitTitle a', v).attr('href')}`
      const image = `${$(v).closest('tr').find('.briefcitJacket img').attr('src')}`
      bundle.selection.push({ title, author, citation, url, image })
    })
    return bundle
  } else if (pageType === 'singleItem') {
    // When there is only one result, LibCat gives a completely different page display
    // We're capturing that display's elements here.
    const bundle = {
      total: '1',
      selection: [
        {
          title: '',
          author: '',
          citation: '',
          url: encodeURI(currentUrl),
          image: $('.bibDisplayJacket a img').attr('src')
        }
      ]
    }
    const allColumns = $('.bibInfoData')
    for (const c of allColumns) {
      const previousSiblingText = $(c).prev().text()
      if (previousSiblingText === 'Title') {
        bundle.selection[0].title = $(c).text().trim()
        continue
      }
      if (previousSiblingText === 'Author') {
        bundle.selection[0].author = $(c).text().trim()
        continue
      }
      if (previousSiblingText === 'Author') {
        bundle.selection[0].author = $(c).text().trim()
        continue
      }
      if (previousSiblingText === 'Publisher') {
        bundle.selection[0].citation = $(c).text().trim()
        continue
      }
    }
    return bundle
  }
}

function whatPageType ($) {
  const elemOnlyOnSinglePage = $('.bibInfoData')
  console.log(elemOnlyOnSinglePage)
  if (elemOnlyOnSinglePage.length) {
    return 'singleItem'
  }
  return 'multiItem'
}

function makeMultiPageTotal ($) {
  const totalFullPage = $(' .browseHeaderData').text().split('of ').at(-1).trim().replace(')', '')
  if (totalFullPage !== '') {
    return totalFullPage
  }
  return '0'
}

module.exports.search = search
