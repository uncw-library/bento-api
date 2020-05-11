/* eslint-env jest */

const axios = require('axios')
const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
jest.mock('axios')

describe('nonexistent endpoint returns a 404', () => {
  test('should give 404 for wrong page', async () => {
    const res = await request.get('/nonexistentpage')
    expect(res.status).toBe(404)
    expect(res.text).toBe(JSON.stringify({ message: 'Endpoint Not Found' }))
  })
})

describe('getroot', () => {
  test('should give 200 if API gives good respose', async () => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe(JSON.stringify({ message: 'It Works!' }))
  })
})

describe('POST /contentdm', () => {
  test('should give a 200 response', async () => {
    const data = { searchTerm: 'hi there hello' }
    // mocking a cdmResponse.  controllers/cDM.js puts out a request to cDM for some information.
    // since cDM out of our control, we tell the tests to replace the normal cDM-generated response with our mocked cDM response instead.
    const cdmResponse = {
      data: {
        pager: { start: '1', maxrecs: '5', total: 52 },
        records: [
          {
            collection: '/honors',
            pointer: 1082,
            filetype: 'pdf',
            parentobject: -1,
            title: 'Analyzing my brothers counsel:the films and research that shaped the screenplay/',
            descri: 'Honors paper Department of Film Studies; Includes bibliographical references (Leaves: 135-136)',
            creato: 'Bareford, William',
            identi: 'BarefordWilliam2009',
            subjec: 'Motion picture plays--United States.; Honors paper (Department of Film Studies)',
            find: '438.pdf'
          },
          {
            collection: '/honors',
            pointer: 500,
            filetype: 'pdf',
            parentobject: -1,
            title: 'Losses in dystopia :an analysis of factors which lead to the formation of dystopias',
            descri: 'Honors paper Department of English',
            creato: 'Peacock, Adrienne Claire',
            identi: 'PeacockAdrienneClaire2006',
            subjec: 'Dystopias in literature.; Honors paper (Department of English)',
            find: '1208.pdf'
          },
          {
            collection: '/oralhistory',
            pointer: 208,
            filetype: 'pdf',
            parentobject: -1,
            title: 'Interview with Victor Smith',
            descri: 'In this interview, Chaplain Victor Smith discusses how he came to enter the chaplaincy, the structure of the Chaplain Corps, and memorable experiences during his service.',
            creato: 'Smith, Victor',
            identi: 'Interview_with_Victor_Smith_July_31_2007.pdf',
            subjec: '',
            find: '209.pdf'
          },
          {
            collection: '/oralhistory',
            pointer: 657,
            filetype: 'pdf',
            parentobject: -1,
            title: 'Interview with Paul Wilkes',
            descri: 'Paul Wilkes, author/journalist and professor of creative writing, shares anecdotes involving his personal life and his career. Wilkes is the author of nineteen books and has written for The New York Times, The Atlantic, and The New Yorker. He has been a visiting professor at the University of North Carolina-Wilmington, Columbia University, and the University of Notre Dame, among others.',
            creato: 'Wilkes, Paul ',
            identi: 'Interview_with_Paul_Wilkes_November_30_2005.pdf',
            subjec: 'Celebrities',
            find: '658.pdf'
          },
          {
            collection: '/honors',
            pointer: 1885,
            filetype: 'pdf',
            parentobject: -1,
            title: 'Factors affecting the recruitment and performance of NCAA Female Division I college golfers',
            descri: 'Honors paper Department of Economics and Finance; Includes bibliographical references (leaves: 36-37)',
            creato: 'Kumar, Laverry',
            identi: 'KumarL2014',
            subjec: 'Women golfers -- Scouting -- United States; College sports -- Scouting -- United States; Honors paper (Department of Economics and Finance)',
            find: '1987.pdf'
          }
        ]
      }
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(cdmResponse))
    // output is the json response we'd expect the app to give to the end user.
    const output = JSON.stringify({ collections: { pager: { start: '1', maxrecs: '5', total: 52 }, records: [{ collection: '/honors', pointer: 1082, filetype: 'pdf', parentobject: -1, title: 'Analyzing my brothers counsel:the films and research that shaped the screenplay/', descri: 'Honors paper Department of Film Studies; Includes bibliographical references (Leaves: 135-136)', creato: 'Bareford, William', identi: 'BarefordWilliam2009', subjec: 'Motion picture plays--United States.; Honors paper (Department of Film Studies)', find: '438.pdf', image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/1082/thumbnail' }, { collection: '/honors', pointer: 500, filetype: 'pdf', parentobject: -1, title: 'Losses in dystopia :an analysis of factors which lead to the formation of dystopias', descri: 'Honors paper Department of English', creato: 'Peacock, Adrienne Claire', identi: 'PeacockAdrienneClaire2006', subjec: 'Dystopias in literature.; Honors paper (Department of English)', find: '1208.pdf', image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/500/thumbnail' }, { collection: '/oralhistory', pointer: 208, filetype: 'pdf', parentobject: -1, title: 'Interview with Victor Smith', descri: 'In this interview, Chaplain Victor Smith discusses how he came to enter the chaplaincy, the structure of the Chaplain Corps, and memorable experiences during his service.', creato: 'Smith, Victor', identi: 'Interview_with_Victor_Smith_July_31_2007.pdf', subjec: '', find: '209.pdf', image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/oralhistory/id/208/thumbnail' }, { collection: '/oralhistory', pointer: 657, filetype: 'pdf', parentobject: -1, title: 'Interview with Paul Wilkes', descri: 'Paul Wilkes, author/journalist and professor of creative writing, shares anecdotes involving his personal life and his career. Wilkes is the author of nineteen books and has written for The New York Times, The Atlantic, and The New Yorker. He has been a visiting professor at the University of North Carolina-Wilmington, Columbia University, and the University of Notre Dame, among others.', creato: 'Wilkes, Paul ', identi: 'Interview_with_Paul_Wilkes_November_30_2005.pdf', subjec: 'Celebrities', find: '658.pdf', image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/oralhistory/id/657/thumbnail' }, { collection: '/honors', pointer: 1885, filetype: 'pdf', parentobject: -1, title: 'Factors affecting the recruitment and performance of NCAA Female Division I college golfers', descri: 'Honors paper Department of Economics and Finance; Includes bibliographical references (leaves: 36-37)', creato: 'Kumar, Laverry', identi: 'KumarL2014', subjec: 'Women golfers -- Scouting -- United States; College sports -- Scouting -- United States; Honors paper (Department of Economics and Finance)', find: '1987.pdf', image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/1885/thumbnail' }] } })
    const res = await request.post('/contentdm')
      .send(data)
    expect(res.status).toBe(200)
    expect(res.text).toEqual(output)
  })
})

describe('POST failing /contentdm', () => {
  test('should give a useful fail response', async () => {
    const data = { searchTerm: 'hi there hello' }
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('test')))
    const res = await request.post('/contentdm')
      .send(data)
    expect(res.status).toBe(500)
  })
})

// describe('POST /journals', () => {
//   const data = { searchTerm: 'hi' }
//   const apiresponse = [{"browzine":[],"title":"Highway and road mileage /","link":"http://libcat.uncw.edu/record=b1000953~S4","issn":null},{"browzine":[{"id":149397,"type":"journals","title":"Historic documents","issn":"0892080X","sjrValue":0,"coverImageUrl":"https://assets.thirdiron.com/default-journal-cover.png","browzineEnabled":false,"externalLink":"http://libcat.uncw.edu/search~S1/?searchtype=X&searcharg=0892-080X&SORT=D&extended=0&SUBMIT=Search&searchlimits=&searchorigarg=l{journal_issn}"}],"title":"Historic documents","link":"http://libcat.uncw.edu/record=b1066502~S4","issn":"0892080X"},{"browzine":[],"title":"Higher education opportunities for minorities and women, annotated selections","link":"http://libcat.uncw.edu/record=b1074149~S4","issn":null}]
//   axios.get.mockImplementationOnce(() => Promise.resolve(apiresponse))
//   test('should give a json response when posting to journal', async () => {
//     const res = await request.post('/journals')
//       .set('Accept', 'application/json')
//       .send(data)
//     // expect('Content-Type', /json/)
//     expect(res.status).toBe(200)
//   })
// })
