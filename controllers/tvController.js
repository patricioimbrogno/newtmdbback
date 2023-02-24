const tvService = require("../services/tvService");

exports.getPopularTVShows = (req, res) => {
    tvService
      .getPopularTVShows()
      .then((shows) => res.status(200).send(shows))
      .catch((err) => res.status(500).send(err));
  };

  
  exports.getAiringTodayTVShows = (req, res) => {
    tvService
      .getAiringTodayTVShows()
      .then((shows) => res.status(200).send(shows))
      .catch((err) => res.status(500).send(err));
  };
  
  exports.getTopRatedTVShows = (req, res) => {
    tvService
      .getTopRatedTVShows()
      .then((shows) => res.status(200).send(shows))
      .catch((err) => res.status(500).send(err));
  };
  
  exports.getOnTheAirTVShows = (req, res) => {
    tvService
      .getOnTheAirTVShows()
      .then((shows) => res.status(200).send(shows))
      .catch((err) => res.status(500).send(err));
  };
  
  exports.getTVShow = (req, res) => {
    const { id } = req.params;
    tvService
      .getTVShow(id)
      .then((show) => res.status(200).send(show))
      .catch((err) => res.status(500).send(err));
  };
  