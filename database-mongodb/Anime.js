const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  like: { type: Number},
  dislike: { type: Number}
}, 
  {
    timestamps: true
  }
);

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;
