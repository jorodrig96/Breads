const express = require('express');
const app = express();
require('dotenv').config();
const breadsController = require('./controllers/breads_controller');

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.use('/breads', breadsController)

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is your home page</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>Error, Page not found.</>')
})

app.listen(process.env.PORT, () => {
    console.log(`Hello, you have been connected to ${process.env.PORT}.`)
})