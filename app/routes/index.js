const express = require('express')
const journalController = require('../controllers/journals')
const bookEbookController = require('../controllers/booksEbooks.js')
const cDMController = require('../controllers/cDM.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'It Works!' })
})

router.post('/journals', async (req, res) => {
  res.json(await journalController.search(req.body.searchTerm))
})

router.post('/books-ebooks', async (req, res) => {
  res.json(await bookEbookController.search(req.body.searchTerm))
})

router.post('/contentdm', async (req, res) => {
  res.json(await cDMController.search(req.body.searchTerm))
})

module.exports = router
