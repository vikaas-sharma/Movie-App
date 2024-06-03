const Movie = require('../models/movie');
const User = require('../models/user');
const notifier = require('node-notifier');
module.exports.playlist = function(req, res) {
  const visibility = req.body.visibility || 'public'; 
  Movie.create({
    movie: req.body.Name,
    user: req.user._id,
    year: req.body.Year,
    poster: req.body.Poster,
    visibility: visibility
  }, function(err, list) {
    if (err) {
      console.log(err);
    }
    notifier.notify({
      title: 'Movie Playlist',
      message: 'Movie added to playlist!',
      sound: true,
      wait: true
    });
    return res.redirect('back');
  });
}



module.exports.sharedPlaylist = async function(req, res) {
  try {
    const movies = await Movie.find({ user: req.params.userId, visibility: 'public' }).populate('user').exec();
    if (!movies.length) {
      console.log("No public movies found for this user.");
    } else {
      console.log("Public movies found:", movies);
    }
    const user = await User.findById(req.params.userId);
    return res.render('shared_playlist', {
      title: 'Shared Playlist',
      movies: movies,
      user: user 
    });
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};

module.exports.destroy = function(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    if (err) {
      console.log(err);
      return res.redirect('back');
    }
    movie.remove();
    notifier.notify({
      title: 'Deleted from Playlist',
      message: 'Deleted movie from Playlist!',
      sound: true,
      wait: true
    });
    return res.redirect('back');
  });
}
