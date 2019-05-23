'use strict'

const router = require('express').Router()

// matches all requests to /api/blocks/
router.use('/blocks', require('./blocks'))

// matches all requests to  /api/snapshots/
router.use('/snapshots', require('./snapshots'))

// matches all requests to  /api/experiences/
router.use('/experiences', require('./experiences'))


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
