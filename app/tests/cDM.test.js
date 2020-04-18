const rewire = require('rewire')
const cDMController = rewire('../controllers/cDM')

const makeURL = cDMController.__get__('makeURL')
const enrich = cDMController.__get__('enrich')

describe('makeURL converts searchTerms into contentDM url', () => {
  test('single search term', () => {
    const url = makeURL('hi')
    expect(url).toBe('https://digitalcollections.uncw.edu/digital/bl/dmwebservices/index.php?q=dmQuery/all/CISOSEARCHALL^hi^exact^and!/title!descri!creato!identi!subjec/nosort/5/1/1/0/0/0/json')
  })
  test('multiple search terms', () => {
    const url = makeURL('hi there hello')
    expect(url).toBe('https://digitalcollections.uncw.edu/digital/bl/dmwebservices/index.php?q=dmQuery/all/CISOSEARCHALL^hi^exact^and!CISOSEARCHALL^there^exact^and!CISOSEARCHALL^hello^exact^and!/title!descri!creato!identi!subjec/nosort/5/1/1/0/0/0/json')
  })
})

describe('enrich adds specific image:v into collection items', () => {
  test('example', () => {
    const input = {
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
          }
        ]
      }
    }
    const output = {
      collections: {
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
            find: '438.pdf',
            image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/1082/thumbnail'
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
            find: '1208.pdf',
            image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/500/thumbnail'
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
            find: '209.pdf',
            image: 'http://digitalcollections.uncw.edu/digital/api/singleitem/collection/oralhistory/id/208/thumbnail'
          }
        ]
      }
    }
    const enriched = enrich(input)
    expect(enriched).toEqual(output)
  })
})
