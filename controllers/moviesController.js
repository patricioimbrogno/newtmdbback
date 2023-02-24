const moviesService = require("../services/moviesService");

exports.getPopularMovies = (req, res) => {
  moviesService
    .getPopularMovies()
    .then((movies) => res.status(200).send(movies))
    .catch((err) => res.status(500).send(err));
};

exports.getNowPlayingMovies = (req, res) => {
  moviesService
    .getNowPlayingMovies()
    .then((movies) => res.status(200).send(movies))
    .catch((err) => res.status(500).send(err));
};

exports.getTopRatedMovies = (req, res) => {
  moviesService
    .getTopRatedMovies()
    .then((movies) => res.status(200).send(movies))
    .catch((err) => res.status(500).send(err));
};

exports.getUpcomingMovies = (req, res) => {
  moviesService
    .getUpcomingMovies()
    .then((movies) => res.status(200).send(movies))
    .catch((err) => res.status(500).send(err));
};

exports.getMovie = (req, res) => {
  const { id } = req.params;
  moviesService
    .getMovie(id)
    .then((movie) => res.status(200).send(movie))
    .catch((err) => res.status(500).send(err));
};
