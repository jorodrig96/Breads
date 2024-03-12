const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bakerSchema = new Schema({
 name: {
    type: String, 
    required: true,
    //validator below chekcs if the entered value is in the given array 
    enum: [ "Rachel", "Monica", "Chandler", "Joey", "Ross", "Phoebe" ]
 },
 startDate: {
    type: Date,
    required: true
 },
 bio: {
    type: String,
    default: "Hello! I love baking!"
 }
})

const Baker = model('Baker', bakerSchema);
module.exports = Baker;