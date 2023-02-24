const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");


router.get("/:id", favoriteController.getFavoritesById);
router.post("/", favoriteController.createFavorite);


module.exports = router;