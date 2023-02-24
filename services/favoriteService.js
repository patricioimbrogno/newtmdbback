const Favorite = require("../models/Favorite");
const ObjectId = require('mongodb').ObjectId;

exports.createFavorite = async (favorite) => {

  const createdFavorite = await Favorite.create(favorite);
  return createdFavorite;
};

exports.getFavoritesById = async (id) => {
  const userId = ObjectId(id);
  const favorites = await Favorite.find({user: userId})
  return favorites;
};
