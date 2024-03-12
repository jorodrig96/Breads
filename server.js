const express = require('express');
const app = express();
require('dotenv').config();
const breadsController = require('./controllers/breads_controller');
const bakersController = require('./controllers/bakers_controller');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method')) // this allows you to override a method when trying to use a method in a action 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(`connected to mongo server: ${process.env.MONGO_URI}`);
    // Your code logic here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB.', error);
  });

//Routes
app.use('/breads', breadsController)
app.use('/bakers', bakersController)

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is your home page</h1>')
})

app.get('*', (req, res) => {
    res.render('Error404')
})

app.listen(process.env.PORT, () => {
    console.log(`Hello, you have been connected to ${process.env.PORT}.`)
})

