const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
//const bread = require('../models/bread');


//INDEX 
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          res.render('Index', {
              breads: foundBreads,
              title: 'Index Page'
          })
      })
      .catch(error => {
        console.log(error)
        res.render('Error404')
      })
})


// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

//EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})

// Read route - SHOW - localhost:3003/breads/indexNumber
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          res.render('show', {
              bread: foundBread
          })
      })
      .catch(err => {
        res.send('Error404')
      })
})


// Create route - adds a new bread
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })
  


// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})


// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

  

breads.get('*', (req, res) => {
    res.send('<h1>Error, page not found</h1>')
})
  

module.exports = breads;