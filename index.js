'use strict'

const express = require('express')
//const path = require('path')
const volleyball = require('volleyball')
const morgan = require('morgan');

const app = express()

// logging middleware
app.use(volleyball)
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
//app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api'))

app.get('*', (req, res) => {
  res.send("We are serving Helper.")
})

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

const port = process.env.PORT || 3000;
 // this can be very useful if you deploy to Heroku!

app.listen(port, function () {
 console.log(`I am practicing active listening on port ${port}`)
})

// if you update your db schemas, make sure you drop the tables first and then recreate them

module.exports = app
