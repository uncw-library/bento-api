const sierraApi = require('../api/requests/sierra')

async function search (searchTerm) {
  const token = (await sierraApi.authenticate())
  const bibs = (await sierraApi.searchBooksEbooks(token, searchTerm))
  // const ids = []
  // const bibRecords = []
  // const booksEbooks = []
  // const videos = []

  /*  bibs.forEach(bib => {
    let supressed = bib.bib.supressed;
    if (!supressed) {
      let code = bib.bib.materialType.code.replace(/ /g, '');
      let locations = bib.bib.locations.map(location => { return location.code });
      console.log(code);
      console.log(locations);
      if (code === 'g' && (locations.includes("wa") || locations.includes("ev"))) videos.push(bib);
      if ( ( (code === 'h') ||
           (code === 'a') ||
           (code === 'c') ||
           (code === 'y') ||
           (code === 'j') ) &&
          ( locations.includes("wg") ||
            locations.includes("wj") ||
            locations.includes("wr") ||
            locations.includes("wf") ||
            locations.includes("wh") ||
            locations.includes("wb") ||
            locations.includes("wc") ||
            locations.includes("we") ||
            locations.includes("wi") ||
            locations.includes("wl") ||
            locations.includes("wn") ||
            locations.includes("ws") ||
            locations.includes("wu") ||
            locations.includes("wv") ||
            locations.includes("eb")
            )) booksEbooks.push(bib);
    } else {
      // do nothing
    }
  });
*/

  return bibs

  /* bibLinks.entries.forEach(entry => ids.push(entry.link.match(/[^/]+$/g)[0]));

  ids.forEach((id) => {
    const bibRecord = (sierraApi.getBibRecord(token, id));
    bibRecords.push(bibRecord);
  });

  return bibRecords;
  */
}

module.exports.search = search

// enpoint expect data like:
// ** no endpoint yet specified **
