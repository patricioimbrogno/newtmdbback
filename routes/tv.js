const express = require("express");

const tvController = require("../controllers/tvController");

const router = express.Router();

router.get("/popular", tvController.getPopularTVShows);
router.get("/airingtoday", tvController.getAiringTodayTVShows);
router.get("/toprated", tvController.getTopRatedTVShows);
router.get("/ontheair", tvController.getOnTheAirTVShows);
router.get("/single/:id", tvController.getTVShow);

module.exports = router;