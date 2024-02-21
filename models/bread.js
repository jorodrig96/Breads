const mongoose = require('mongoose');

//allows you to use the schema method in mongoose
const { Schema } = mongoose;

//schema
const breadSchema = new Schema ({
  name: { type: String, required: true },
  hasGluten: Boolean,
  pic: { type: String, default: 'http://placehold.it/500x500.png' }
})

//model 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
