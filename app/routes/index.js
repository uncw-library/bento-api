const express = require('express')
const journalController = require('../controllers/journals')
const bookEbookController = require('../controllers/booksEbooks.js')
const cDMController = require('../controllers/cDM.js')

const router = express.Router()

/*
routes
*/

router.get('/', (req, res) => {
  res.json({ message: 'It Works!' })
})

router.post('/', (req, res) => {
  res.json({ message: 'It Works!' })
})

router.post('/journals', async (req, res) => {
  res.json(await journalController.search(req.body.searchTerm))
})

router.post('/books-ebooks', async (req, res) => {
  res.json(await bookEbookController.search(req.body.searchTerm))
})

router.post('/contentdm', async (req, res, next) => {
  try {
    res.json(await cDMController.search(req.body.searchTerm))
  } catch (err) {
    next(err)
  }
})

/*
 if the request doesn't match a route above,
 create a 404 error
*/

router.use((req, res, next) => {
  res.status(404).json({message: 'Endpoint Not Found'})
})

module.exports = router