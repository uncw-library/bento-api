const rewire = require('rewire')
const summonController = rewire('../controllers/summon')

const formatDate = summonController.__get__('formatDate')
const trimResults = summonController.__get__('trimResults')
const getNestedObject = summonController.__get__('getNestedObject')
const truncateAuthors = summonController.__get__('truncateAuthors')

describe('formatDate converts formats dates in records into a standard form', () => {
  test('sending multiple tests', () => {
    const returnedReceived = {
      'Mar 2009': { year: '2009', month: '03', day: undefined },
      2004: { year: '2004', month: undefined, day: undefined },
      'Aug 15, 2005': { year: '2005', month: '08', day: '15' },
      'Aug 16, 2005': { year: '2005', month: '8', day: '16' },
      'Apr 1, 2018': { year: '2018', month: '4', day: '1' },
      2001: { year: '2001', month: undefined, day: '1' }
    }
    for (const [returned, received] of Object.entries(returnedReceived)) {
      const formatted = formatDate(received)
      expect(returned).toBe(formatted)
    }
  })
})

describe('trimResults preserves the required fields', () => {
  test('sending multiple tests', () => {
    const document1 = JSON.parse('{"version":"2.0.0","sessionId":"5ad8305e-113c-4271-b332-e2ade853fe77","elapsedQueryTime":3,"queryTime":121,"totalRequestTime":21,"pageCount":9357,"recordCount":9357,"query":{"queryString":"s.fvf=ContentType%2CJournal+Article%2Cf&s.fvf=IsFullText%2Ctrue%2Cf&s.fvf=isScholarly%2Ctrue%2Cf&s.l=en&s.secure=f&s.link.rule.version=Default&s.dailyCatalog=t&s.q=banjo&s.ho=t&s.hl=f&s.ps=1&s.pn=0","pageNumber":1,"pageSize":1,"isHighlightingEnabled":false,"isHoldingsOnlyEnabled":true,"textQueries":[{"textQuery":"banjo","removeCommand":"removeTextQuery(banjo)"}],"searchTerms":[],"textFilters":[],"rangeFilters":[],"facetValueFilters":[{"fieldName":"ContentType","value":"Journal Article","removeCommand":"removeFacetValueFilter(ContentType,Journal Article)"},{"fieldName":"IsFullText","value":"true","removeCommand":"removeFacetValueFilter(IsFullText,true)"},{"fieldName":"isScholarly","value":"true","removeCommand":"removeFacetValueFilter(isScholarly,true)"}],"inclusiveFacetValueFilters":[],"facetValueGroupFilters":[],"facetFields":[],"rangeFacetFields":[],"sort":[]},"facetFields":[],"rangeFacetFields":[],"didYouMeanSuggestions":[],"recommendationLists":{},"documents":[{"hasFullText":true,"isFullTextHit":false,"isPrint":false,"inHoldings":true,"openUrl":"ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=info%3Asid%2Fsummon.serialssolutions.com&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rft.genre=article&rft.atitle=Banjo&rft.jtitle=Ploughshares&rft.au=Radulova%2C+Nadya&rft.date=2018-03-22&rft.pub=Ploughshares%2C+Inc&rft.issn=0048-4474&rft.eissn=2162-0903&rft.volume=44&rft.issue=1&rft.spage=132&rft.externalDocID=A536532516&paramdict=en-US","link":"http://uncw.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwpV1LS8NAEF60XvTg29YnRURPoekmm2QPIm0xtVAt1Oo1bHY3RcGmNBb_vjOb1KYHQfAylxmSzTLMfLP5ZpaQKyZUAG6krWbTkZZL_aYVOw61NBVKQ3pItKH8D0M6GtHRA1L-7xe9MIbtjrHRRGkxnWYNlcpGizkecyAXe43nl17nrnR7xvwWQOUHjs1y18kGRUCMDePd_rI90i2mM-LZmYvUviL6lhmIJp-EO2S8PEQxa4Hs8lUiVy-mNP57rbtku4Cc9VbuI3tkTU_2SbVfHFRm9et6_2e2crZPtl7fsnlunx2QjbaYvKeH5CW8H3UerOLqBGtMHdhvn8vEcwMRQ-HsssD3bV8y3_YSJgFQKMEBd9k0CQTUqB6PeaIEZPIgUYkXc6ivnRqpSypsJR0dcBW4SqqASyY9xbQdc4gT6phc4sdHOEVigjSVsZhnWQQ7Hy234BejXru7YlQtjJL0cyZkVNLcrGhE0TSQTjTOrVp5xrGxhOIF__br2YqulutmMn99WXVknCCa5sM9Iuoh5GTNk7983SnZBABlehQpPSOVz9lcn5MK-swFYvUQJH3iF8YfQfZaA5TtLsr-EOUAbR7p4Bto4Oct","ExternalDocumentID":["A536532516","26510551"],"Issue":["1"],"DBID":["IOF","17F"],"IngestDate":["Sun May 05 18:35:46 EDT 2019","Tue Jan 28 19:10:20 EST 2020","Sun May 05 20:47:50 EDT 2019","Sun May 05 22:53:42 EDT 2019","Fri Feb 21 02:50:09 EST 2020","Fri Feb 21 00:48:45 EST 2020","Thu Apr 16 20:54:13 EDT 2020"],"PublicationDate_xml":[{"month":"4","year":"2018","text":"20180401","day":"1"}],"Score":["24.753477"],"URI":["https://www.jstor.org/stable/26510551"],"Publisher_xml":[{"name":"Emerson College"},{"name":"Ploughshares, Inc"}],"ID":["FETCH-LOGICAL-g2371-79cf648abeb24587707c5706f5c028da935202f8a71369b9fda4158fdf6b9eb33"],"Publisher":["Emerson College","Ploughshares, Inc"],"Language":["English"],"EISSN":["2162-0903"],"Author":["NADYA RADULOVA","Maria Vassileva"],"ISSN":["0048-4474"],"PublicationCentury":["2000"],"PublicationDecade":["2010"],"IsScholarly":["true"],"PublicationTitle":["Ploughshares"],"ProviderPackageCode":["JST","SA0","2N9","JPL","JSODD","IOF","IEA","IAO","GICCO","IGG","ITC","8GL","ILR","IBG","CRO","IAA","17F"],"SubjectTerms":["Personal narratives","Portrayals"],"Discipline":["Visual Arts","Languages & Literatures"],"Volume":["44"],"ContentType":["Journal Article"],"SourceType":["Aggregation Database","Publisher"],"Author_xml":[{"sequence":"1","fullname":"NADYA RADULOVA"},{"sequence":"2","fullname":"Maria Vassileva"}],"PublicationYear":["2018"],"StartPage":["132"],"SourceID":["gale","jstor"],"Copyright_xml":[{"notice":"2018 by Emerson College"},{"notice":"COPYRIGHT 2018 Ploughshares, Inc."}],"SSID":["ssj0004420"],"Title":["Banjo"],"PublicationDate":["20180401","20180322"],"PageCount":["1"],"EndPage":["132"],"MergedId":["FETCHMERGED-LOGICAL-g2371-79cf648abeb24587707c5706f5c028da935202f8a71369b9fda4158fdf6b9eb33"],"Copyright":["2018 by Emerson College","COPYRIGHT 2018 Ploughshares, Inc."],"IsPeerReviewed":["false"],"Audience":["Academic"],"thumbnail_m":["http://www.syndetics.com/index.aspx?isbn=/mc.gif&issn=0048-4474&client=uncwh"],"thumbnail_s":["http://www.syndetics.com/index.aspx?isbn=/sc.gif&issn=0048-4474&client=uncwh"],"thumbnail_l":["http://www.syndetics.com/index.aspx?isbn=/lc.gif&issn=0048-4474&client=uncwh"],"Database_xml":[{"sequence":"1","dbid":"IOF","name":"Gale General OneFile","url":"http://liblink.uncw.edu/login?url=http://infotrac.galegroup.com/itweb/wilm99594?db=ITOF","sourceTypes":["Aggregation Database"]}],"link.rule.ids":["307,797,798,801,854,10156,10159,10500,10505,10507,10588,10614,10619,10621,25613,26477,26479,26487,26824,27903"],"LinkModel":["DirectLink"],"IEDL.DBID":["8GL"],"BookMark":["ePnHCXMwfZ3JCsIwEECLKCjiJ7hcPVTa7DmquIFHPYc0bYoiVar-v5O2SAPiKZc3Q0hgFmYy6QQDFDNU5f_dqrorQkI46X8fKxIUDYLeShdXMOU9C6ecjZp1GJy3m9N6HzYfAYQ5wjwOuTSWEaETSAMJFZxH3FAeMUsNuMdUS4giImSFhoyLyUTaVINfEja1LJGQLeJhMK31OqurbqXJ9fv5VEuKGcXg4d0Q0FmbuLxcyTgrfWTRQtz9v0ptdNPGfi8yN0nJF5j8EFBtYO4BrjsdTHK9ucNq5yv7w4rd0WfHNVt1WKpHPbdCIeaiKRrjD5ERdY0"],"DatabaseName":["Gale General OneFile","Gale Literature: LitFinder"],"ParticipantIDs":["gale_lrcgauss_A536532516","gale_litfinder_A536532516","gale_infotracacademiconefile_A536532516","gale_infotrac_536532516","gale_incontextgauss_IBG_A536532516","gale_incontextgauss_8GL_A536532516","jstor_primary_26510551"]}],"rollups":{"image":{},"reference":{},"newspaper":{}}}')
    expect(trimResults(document1)[0].title).toBe('Banjo')
    expect(trimResults(document1)[0].link).toBe('http://uncw.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwpV1LS8NAEF60XvTg29YnRURPoekmm2QPIm0xtVAt1Oo1bHY3RcGmNBb_vjOb1KYHQfAylxmSzTLMfLP5ZpaQKyZUAG6krWbTkZZL_aYVOw61NBVKQ3pItKH8D0M6GtHRA1L-7xe9MIbtjrHRRGkxnWYNlcpGizkecyAXe43nl17nrnR7xvwWQOUHjs1y18kGRUCMDePd_rI90i2mM-LZmYvUviL6lhmIJp-EO2S8PEQxa4Hs8lUiVy-mNP57rbtku4Cc9VbuI3tkTU_2SbVfHFRm9et6_2e2crZPtl7fsnlunx2QjbaYvKeH5CW8H3UerOLqBGtMHdhvn8vEcwMRQ-HsssD3bV8y3_YSJgFQKMEBd9k0CQTUqB6PeaIEZPIgUYkXc6ivnRqpSypsJR0dcBW4SqqASyY9xbQdc4gT6phc4sdHOEVigjSVsZhnWQQ7Hy234BejXru7YlQtjJL0cyZkVNLcrGhE0TSQTjTOrVp5xrGxhOIF__br2YqulutmMn99WXVknCCa5sM9Iuoh5GTNk7983SnZBABlehQpPSOVz9lcn5MK-swFYvUQJH3iF8YfQfZaA5TtLsr-EOUAbR7p4Bto4Oct')
    expect(trimResults(document1)[0].vol).toBe('44')
    expect(trimResults(document1)[0].issue).toBe('1')
    expect(trimResults(document1)[0].page).toBe('132')
    expect(trimResults(document1)[0].authors).toBe('NADYA RADULOVA and Maria Vassileva')
    expect(trimResults(document1)[0].date).toBe('Apr 1, 2018')
  })
})

describe('truncateAuthors formats authors as we intend', () => {
  test('sending multiple tests', () => {
    const returnedReceived = {
      'Gauthier, W and Lamon, J': { authorList: ['Gauthier, W', 'Lamon, J'] },
      'Butcher, Z; van Driel, W; Schneider, S and others': { authorList: ['Butcher, Z', 'van Driel, W', 'Schneider, S', 'Lehnert, M. D', 'Minchin, R'] },
      'Ott, J; Longmore, S. N; Beuther, H and others': { authorList: ['Ott, J', 'Longmore, S. N', 'Beuther, H', 'Linz, H', 'McClure-Griffiths, N. M', 'Schilke, P', 'Hill, T', 'Anderson, L. D', 'Walsh, A. J', 'Smith, R. J', 'Hughes, A', 'Carlhoff, P', 'Plume, R', 'Henning, T', 'Klessen, R. S', "Nguyen-Lu'o'ng, Q", 'Motte, F', 'Roy, N', 'Stil, J. M', 'Ragan, S. E', 'Urquhart, J. S', 'Brunthaler, A', 'Glover, S. C. O', 'Goldsmith, P. F', 'Bigiel, F', 'Johnston, K. G', 'Menten, K. M', 'Heitsch, F', 'Schneider, N', 'Bihr, S', 'Walter, F', 'Heyer, M. H', 'Churchwell, E'] },
      'Infante, Francisco; Vega, Fernando E; Pérez, Jeanneth': { authorList: ['Infante, Francisco', 'Vega, Fernando E', 'Pérez, Jeanneth'] },
      'Lopes, Adrian A': { authorList: ['Lopes, Adrian A'] }
    }
    for (const [returned, received] of Object.entries(returnedReceived)) {
      const formatted = truncateAuthors(received)
      expect(returned).toBe(formatted)
    }
  })
})

describe('getNestedObject succeeds or returns undefined', () => {
  test('succeeds', () => {
    const testObject = { first: { second: { third: 'correct value' } } }
    expect(getNestedObject(testObject, ['first', 'second', 'third'])).toBe('correct value')
    expect(getNestedObject(testObject, ['first', 'tenth'])).toBe(undefined)
  })
})
