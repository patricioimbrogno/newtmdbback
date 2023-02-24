const express = require("express");
const router = express.Router();
const users = require("./users");
const movies = require("./movies");
const search = require("./search")
const favorites = require("./favorites")
const tv = require("./tv")

router.use("/users", users)
router.use("/favorites", favorites)
router.use("/movies", movies)
router.use("/search", search)
router.use("/tv", tv)

module.exports = router;