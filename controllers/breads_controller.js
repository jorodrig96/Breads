const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread')

breads.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

// Read route - SHOW - localhost:3003/breads/indexNumber
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })

breads.get('*', (req, res) => {
    res.send('<h1>Error, page not found</h1>')
})
  

module.exports = breads;