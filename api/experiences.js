// api/experiences.js
const router = require('express').Router();

// matches GET requests to /api/experiences/
router.get('/', function (req, res, next) { /* etc */})
// matches POST requests to /api/experiences/
router.post('/', function (req, res, next) { /* etc */})
// matches PUT requests to /api/experiences/:experienceId
router.put('/:experienceId', function (req, res, next) { /* etc */})
// matches DELETE requests to /api/experiences/:experienceId
router.delete('/:experienceId', function (req, res, next) { /* etc */})

module.exports = router;
