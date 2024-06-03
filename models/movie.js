const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const movieSchema = mongoose.Schema({
  movie: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  year: {
    type: String
  },
  poster:{
    type: String
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
  shareId: {
    type: String,
    default: uuidv4
  }
}, {
  timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;