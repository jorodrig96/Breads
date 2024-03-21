const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const breadSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hasGluten: Boolean,
  image: {
    type: String,
    default: 'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png'
  },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
});

breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`;
};

const Bread = model('Bread', breadSchema);
module.exports = Bread;
