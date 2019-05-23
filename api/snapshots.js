// api/snapshots.js
const router = require('express').Router();

// matches GET requests to /api/snapshots/
router.get('/', function (req, res, next) { /* etc */})
// matches POST requests to /api/snapshots/
router.post('/', function (req, res, next) { /* etc */})
// matches PUT requests to /api/snapshots/:snapshotId
router.put('/:snapshotId', function (req, res, next) { /* etc */})
// matches DELETE requests to /api/snapshots/:snapshotId
router.delete('/:snapshotId', function (req, res, next) { /* etc */})

module.exports = router;
