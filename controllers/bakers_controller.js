const express = require('express')

const bakerRouter = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')

bakerRouter.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
    .catch(err => {
        res.send('Error404')
      })
})

module.exports = bakerRouter;