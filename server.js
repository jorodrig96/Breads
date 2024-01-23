const express = require('express');
const app = express();
require('dotenv').config();

const breadsController = require('./controllers/breads_controller');

app.use('/breads', breadsController)

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is your home page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Hello, you have been connected to ${process.env.PORT}.`)
})