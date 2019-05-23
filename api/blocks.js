// api/blocks.js
const router = require('express').Router();

const {Block} = require('../db/models')

// matches GET requests to /api/blocks/
router.get('/', async (req, res, next) => {
  // res.send("DEFAULT BLOCKS")
  try {
    const blocks = await Block.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})

// matches POST requests to /api/blocks/
router.post('/', async (req, res, next) => {
  try {
    const block = await Block.create(req.body)
    res.json(block)
  } catch (err) {
    next(err)
  }
})

// matches GET requests to /api/blocks/:blockId
router.get('/:blockId', async (req, res, next) => {
  try {
    const block = await Block.findById(req.params.blockId)
    res.json(block)
  } catch (err) {
    next(err)
  }
})

// matches PUT requests to /api/blocks/:blockId
router.put('/:blockId', async (req, res, next) => {
  try {
    const block = await Block.findById(req.params.blockId)
    const updatedBlock = block.update(req.body)
    console.log('updatedBlock ', block.description);
    res.json(block)
  } catch (err) {
    next(err)
  }
})

// matches GET requests to /api/blocks/
router.get('/time/:minutes', async (req, res, next) => {
  const minutes = req.params.minutes
  try{
    const matches = await Block.findAll({
      where: {duration: minutes}
    })
    res.json(matches)
  } catch (err) {
    next(err)
  }
})

// router.put('/status/:status', async (req, res, next) => {
//   try {
//     const blocks = await Block.scope(null).findAll(
//       {where: {status: req.params.status}}
//     )
//     blocks.forEach(async (block) => {
//       await block.update({status: 'active'})
//       console.log(`${block.description} has been updated to ${block.status}`);
//     })
//     res.send('done')
//   } catch (err) {
//     next(err)
//   }
// })
//
// router.put('/pause/:blockId', async (req, res, next) => {
//   try {
//     const block = await Block.findById(req.params.blockId)
//     const updatedBlock = block.update(req.body)
//     console.log('updatedBlock ', block.description);
//     res.json(block)
//   } catch (err) {
//     next(err)
//   }
// })

// matches DELETE requests to /api/blocks/:blockId
router.delete('/:blockId', async (req, res, next) => {
  try {
    const blocks = await Block.findAll()
    res.json(blocks)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
