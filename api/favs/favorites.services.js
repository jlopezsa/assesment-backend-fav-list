const FavoritesModel = require('./favorites.model');

function getAllListFavs() {
  return FavoritesModel.find();
}

module.exports = {
  getAllListFavs,
};
