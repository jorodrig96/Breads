const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Bread = require('./bread');

const bakerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Rachel", "Monica", "Chandler", "Joey", "Ross", "Phoebe"]
    },
    startDate: {
      type: Date,
      required: true
    },
    bio: {
      type: String,
      default: "Hello! I love baking!"
    }
  },
  { toJSON: { virtuals: true } }
);

bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker'
});

// hook that deletes all breads associated with a baker
//this hook references the findOneAndDelete in the breads controller 
bakerSchema.post('findOneAndDelete', function() {
   Bread.deleteMany({ baker: this._conditions._id })
       .then(deleteStatus => {
           console.log(deleteStatus)
       })
 })
 

const Baker = model('Baker', bakerSchema);
module.exports = Baker;
