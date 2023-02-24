const express = require("express");

const searchController = require("../controllers/searchController");

const router = express.Router();

router.get("/", searchController.getSearchedFeature);

module.exports = router;