const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread')

breads.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
})

// Read route - SHOW - localhost:3003/breads/indexNumber
breads.get('/:arrayIndex', (req, res) => {
    if(Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
      })
    } else {
        res.render('Error404')
    }
    
})

breads.get('*', (req, res) => {
    res.send('<h1>Error, page not found</h1>')
})
  

module.exports = breads;