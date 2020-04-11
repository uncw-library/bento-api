/**
* our '/' routes
*/

const express = require('express')
const journalController = require('../controllers/journals')
const bookEbookController = require('../controllers/booksEbooks.js')
const cDM = require('../controllers/cDM.js')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ message: 'It Works!' })
})

/* POST to /journals */
router.post('/journals', async (req, res) => {
  /* return journal results from a search term (includes browzine) */
  res.json(await journalController.search(req.body.searchTerm))
})

/* POST to /books-ebooks */
router.post('/books-ebooks', async (req, res) => {
  /* return book and ebook results from a search term (from sierra) */
  res.json(await bookEbookController.getBooksAndEbooks(req.body.searchTerm))
})

/* POST to /books-ebooks */
router.post('/contentdm', async (req, res) => {
  /* return contentdm results from a searchTerm */
  res.json(await cDM.search(req.body.searchTerm))
})

module.exports = router
