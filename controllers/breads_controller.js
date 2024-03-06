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
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBread => {
    res.render('edit', {
      bread: foundBread
    })
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
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  })
})


// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findOneAndDelete(req.params.id)
  .then(deletedBread => {
    res.status(303).redirect('/breads')
    console.log(deletedBread)
  })
  .catch(err => {
    res.send('Error404')
  })
})

  

breads.get('*', (req, res) => {
    res.send('<h1>Error, page not found</h1>')
})
  

module.exports = breads;