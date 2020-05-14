const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const cDMController = require('./controllers/cDM')
const journalController = require('./controllers/journals')
const libcatController = require('./controllers/libcat')
const summonController = require('./controllers/summon')

/*
app configuration
*/

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

/*
routes
*/

app.get('/', (req, res) => {
  res.json({ message: 'It Works!' })
})

app.post('/', (req, res) => {
  res.json({ message: 'It Works!' })
})

app.post('/books-ebooks', async (req, res, next) => {
  res.json(await libcatController.search(req.body.searchTerm, 'books-ebooks', next))
})

app.post('/contentdm', async (req, res, next) => {
  res.json(await cDMController.search(req.body.searchTerm, next))
})

app.post('/databases', async (req, res, next) => {
  res.json({ message: 'not yet implemented' })
})

app.post('/govdocs', async (req, res, next) => {
  res.json(await libcatController.search(req.body.searchTerm, 'govdocs', next))
})

app.post('/journals', async (req, res, next) => {
  res.json(await journalController.search(req.body.searchTerm, next))
})

app.post('/newsmags', async (req, res, next) => {
  res.json(await summonController.search(req.body.searchTerm, 'newsMags', next))
})

app.post('/scholarly', async (req, res, next) => {
  res.json(await summonController.search(req.body.searchTerm, 'scholarly', next))
})

app.post('/videos-music', async (req, res, next) => {
  res.json(await libcatController.search(req.body.searchTerm, 'videos-music', next))
})

/*
 if the request doesn't match a route above,
 create a 404 error
*/

app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint Not Found' })
})

/*
error handler
*/

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  console.log(err.message)
  res.jsonp({ message: '', error: err.message })
})

module.exports = app
