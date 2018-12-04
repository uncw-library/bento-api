/**
* our '/' routes
*/

const express = require('express');

const router = express.Router();

const sierraApi = require('../api/requests/sierra');
const browzineApi = require('../api/requests/browzine');

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    name: 'Elliot',
  });
});

/* POST to /search */
router.post('/journals', async (req, res) => {
  const token = JSON.parse(await sierraApi.authenticate()).access_token;
  const bibLinks = (await sierraApi.searchTerm(token, req.body.searchTerm));
  const ids = [];
  const bibRecords = [];
  const browzineRecords = [];

  bibLinks.entries.forEach(entry => ids.push(entry.link.match(/[^/]+$/g)[0]));

  ids.forEach((id) => {
    const bibRecord = (sierraApi.getBibRecord(token, id));
    bibRecords.push(bibRecord);
  });

  (await Promise.all(bibRecords)).forEach((record) => {
    const recordNum = Object.keys(record)[0];
    const browzineRecord = browzineApi.getInformation(record[recordNum], record.title, recordNum);
    browzineRecords.push(browzineRecord);
  });

  res.json(await Promise.all(browzineRecords));
});

module.exports = router;
