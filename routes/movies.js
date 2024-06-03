const express = require('express');
const router = express.Router();
const passport = require('passport');
const movieController = require('../controllers/movie_controller');

router.post('/playlist',movieController.playlist);


router.get('/shared/:userId', movieController.sharedPlaylist);

router.get('/destroy/:id', passport.checkAuthentication, movieController.destroy);

module.exports = router;