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

bakerRouter.get('/:id', (req, res) => {
  Baker.findById(req.params.id)
  .populate('breads')
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

module.exports = bakerRouter;