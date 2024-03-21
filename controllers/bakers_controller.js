const express = require('express')

const bakerRouter = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

bakerRouter.get('/', (req, res) => {
  Baker.find()
  .populate('breads')
  .then(foundBakers => {
    res.send(foundBakers)
  })
  .catch(err => {
    res.send('Error404')
  })
})

bakerRouter.get('/:id', async (req, res) => {
  const foundBaker = await Baker.findById(req.params.id)
  .populate({
    path: 'breads',
    options: { limit: 6 }
  })
  .then(foundBaker => {
    res.render('BakerShow', {
      baker: foundBaker
    })
  })
  .catch(err => {
    res.send('Error404')
  })
})

bakerRouter.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
    .catch(err => {
        res.send('Error404')
      })
})

bakerRouter.delete('/:id', (req, res) => {
  Baker.findByIdAndDelete(req.params.id)
  .then( deletedBaker => {
    res.status(303).redirect('/breads')
  })
  .then(() => {
    console.log('baker deleted!')
  })
})

module.exports = bakerRouter;