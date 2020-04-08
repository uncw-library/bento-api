const request = require('request')

// get information about the digital collections
function getDigitalCollections (searchTerm) {
  let url = 'https://digitalcollections.uncw.edu/digital/bl/dmwebservices/index.php?q=dmQuery/all/'
  searchTerm.split(' ').forEach((term) => { url += `CISOSEARCHALL^${term}^exact^and!` })
  url += '/title!descri!creato!identi!subjec/nosort/5/1/1/0/0/0/json'

  const options = {
    url,
    headers: { Accept: 'application/json' }
  }

  return new Promise((resolve, reject) => {
    request.get(options, (err, res, body) => {
      try {
        stubbed_response = {"collections":{"pager":{"start":"1","maxrecs":"5","total":1424},"records":[{"collection":"/honors","pointer":992,"filetype":"pdf","parentobject":-1,"title":"Characterizing differential mortality of bottlenose dolphins (Tursiops truncatus)","descri":"Honors paper Department of Biological Sciences","creato":"Harrell, Anne Elizabeth","identi":"HarrellAnneElizabeth2003","subjec":"Bottlenose dolphin--Mortality--Atlantic Coast.; Fishery--Law and legislation--United States.; Marine mammals--Law and legislation--United States.; Honors paper (Department of Biological Sciences)","find":"1700.pdf","image":"http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/992/thumbnail"},{"collection":"/honors","pointer":1079,"filetype":"pdf","parentobject":-1,"title":"Assessment of surface temperature patterns on the dorsal fin of bottlenose dolphins (Tursiops truncatus) using infrared thermography","descri":"Includes bibliographical references (Leaves: 54-55); Honors paper Department of Biological Sciences","creato":"Barbieri, Michelle Marie","identi":"BarbieriMichelleMarie2002","subjec":"Bottlenose dolphin--Research.; Thermography.; Honors paper (Department of Biological Sciences)","find":"435.pdf","image":"http://digitalcollections.uncw.edu/digital/api/singleitem/collection/honors/id/1079/thumbnail"},{"collection":"/p17190coll13","pointer":3724,"filetype":"pdf","parentobject":-1,"title":"New Hanover County School System Annual Audit Report for Fiscal Year Ended June 30","descri":"","creato":"Brock, William E.","identi":"spc_hbellamy167_07_05_001_083","subjec":"","find":"3482.pdf","image":"http://digitalcollections.uncw.edu/digital/api/singleitem/collection/p17190coll13/id/3724/thumbnail"},{"collection":"/p17190coll13","pointer":3647,"filetype":"pdf","parentobject":-1,"title":"Desegregation Plan in New Hanover County for 1971-1972","descri":"","creato":"Division of Equal Educational Opportunities","identi":"spc_hbellamy167_07_09_001_095","subjec":"","find":"3445.pdf","image":"http://digitalcollections.uncw.edu/digital/api/singleitem/collection/p17190coll13/id/3647/thumbnail"},{"collection":"/hoc","pointer":808,"filetype":"cpd","parentobject":-1,"title":"The history of the Chaplain Corps, United States Navy, Vol. 8. United States Navy Chaplains 1972-1981.","descri":"\"Biographical and Service Record Sketches of Chaplains on Active Duty during the period 1 January 1972 - 31 December 1981. Including Highlights of Chaplain Corps History and List of Chaplains in the Naval Reserve\"","creato":"","identi":"NavPers 15507","subjec":"United States. Navy. Chaplain Corps -- History","find":"809.cpd","image":"http://digitalcollections.uncw.edu/digital/api/singleitem/collection/hoc/id/808/thumbnail"}]}}
        if (err) reject(err)
        else { return stubbed_response }
        // else resolve({ collections: JSON.parse(body) })
      } catch (err) {
        console.log('Err with CDM body:')
        console.log(body)
        console.log(err)
        resolve({ collections: [] })
      }
    })
  })
}

module.exports.getDigitalCollections = getDigitalCollections
