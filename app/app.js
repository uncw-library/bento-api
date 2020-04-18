const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')

/*
app configuration
*/

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', indexRouter)

/*
error handler
*/

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.locals.message = err.message
  console.error(err)
  // send error details to view only in development
  res.locals.error = app.get('env') === 'development' ? err : {}
  res.json({ error: err })
})

module.exports = app
