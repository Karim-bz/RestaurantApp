const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restaurant = new Schema({
  name:  String ,
  image: String ,
  adress: String ,
  category: {
    type: Schema.Types.ObjectId ,
    ref: 'Category',
  },
}, {
  collection: 'Restaurants'
})

module.exports = mongoose.model('Restaurant', Restaurant)
