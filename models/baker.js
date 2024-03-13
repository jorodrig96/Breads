const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Bread = require('./bread');


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
}, { toJSON: {virtuals: true }} 
)

bakerSchema.virtual('breads', {
   ref: 'Bread',
   localField: '_id',
   foreignField: 'baker'
})

const Baker = model('Baker', bakerSchema);
module.exports = Baker;