const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
const Baker = require('../models/baker');
const bakerRouter = require('./bakers_controller');
//const bread = require('../models/bread');


//INDEX 
// using async/await to make code more readable
breads.get('/', async (req, res) => {
  const foundBakers = await Baker.find().lean()
  const foundBreads = await Bread.find().limit(4).lean() 
  res.render('Index', {
              breads: foundBreads,
              bakers: foundBakers,
              title: 'Index Page'
          })
      })

{/*
limit allows you to render only a certain amount of breads that have been uploaded instead of all them. 
to see all of the breads you can now click on indivual users.
However, what if users actually want to see the entire list? 
We could create a custom route for a "See All Breads" button that queries the breads without the limit and reloads the page with all the breads. 
Alternatively, we could also try utilizing the skip method to paginate through all the breads in small chunks at a time rather than immediately displaying all breads. 
When using .lean, remmeber to change all .id to ._id in your pages for them to not hang up*/}


// NEW
// using async/await to make code more readable
breads.get('/new', async (req, res) => {
  const foundBakers = await Baker.find()
  res.render('new', {
    bakers: foundBakers 
  })
})


//EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
  .then(foundBakers => {
    Bread.findById(req.params.id)
  .then(foundBread => {
    res.render('edit', {
      bread: foundBread,
      bakers: foundBakers
    })
  })
})})
  

// Read route - SHOW - localhost:3003/breads/indexNumber
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
          const bakedBy = foundBread.getBakedBy()
          console.log(bakedBy)
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