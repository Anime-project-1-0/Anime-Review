const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Anime-Review';

const Anime = mongoose.connect(mongoUri);

module.exports = Anime;
