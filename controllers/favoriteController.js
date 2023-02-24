const favoriteService = require("../services/favoriteService.js");


exports.createFavorite = (req, res) => {
    const favorite = req.body;
    favoriteService
      .createFavorite(favorite)
      .then((newFavorite) => {
        res.status(201).send(newFavorite);
      })
      .catch((err) => res.status(500).send(err));
  };


exports.getFavoritesById = (req, res) => {
    const id = req.params.id
   
    favoriteService
    .getFavoritesById(id)
    .then((favorites) => {
      res.status(200).send(favorites);
    })
    .catch((err) => res.status(500).send(err));
};