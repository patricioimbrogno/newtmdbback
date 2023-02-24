const express = require("express");

const moviesController = require("../controllers/moviesController");

const router = express.Router();

router.get("/popular", moviesController.getPopularMovies);
router.get("/nowplaying", moviesController.getNowPlayingMovies);
router.get("/toprated", moviesController.getTopRatedMovies);
router.get("/upcoming", moviesController.getUpcomingMovies);
router.get("/single/:id", moviesController.getMovie);


module.exports = router;