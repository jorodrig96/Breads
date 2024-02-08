const express = require('express');
const app = express();
require('dotenv').config();
const breadsController = require('./controllers/breads_controller');
const methodOverride = require('method-override')

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method')) // this allows you to override a method when trying to use a method in a action 
//Routes
app.use('/breads', breadsController)

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is your home page</h1>')
})

app.get('*', (req, res) => {
    res.render('Error404')
})

app.listen(process.env.PORT, () => {
    console.log(`Hello, you have been connected to ${process.env.PORT}.`)
})