const FavsModel = require('./favorites.model');

function getAllListFavs() {
  const response = FavsModel.find();
  console.log('SERVICE: ', response);
  return response;
}

module.exports = {
  getAllListFavs,
};
