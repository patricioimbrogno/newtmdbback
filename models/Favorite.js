
const mongoose = require('mongoose')


const favoriteShema = new mongoose.Schema({
  type: String,
  genre: String,
  title: String,
  director: String,
  user: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  }],
})




module.exports = mongoose.model("Favorite", favoriteShema)
