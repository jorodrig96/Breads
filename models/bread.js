// require mongoose 
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor 
const { model, Schema } = mongoose ;

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png' }
})

// model and export 
const Bread = model('Bread', breadSchema);
module.exports = Bread;
