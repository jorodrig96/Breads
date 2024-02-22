// require mongoose 
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor 
const { model, Schema } = mongoose ;

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' }
})

// model and export 
const Bread = model('Bread', breadSchema);
module.exports = Bread;
