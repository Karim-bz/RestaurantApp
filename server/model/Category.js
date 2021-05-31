const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  }
}, {
  collection: 'categorys'
})

module.exports = mongoose.model('Category', Category)
