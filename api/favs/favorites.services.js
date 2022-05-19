const FavsModel = require('./favorites.model');

async function createListFavs(newListFavs) {
  try {
    const listFav = await FavsModel.create(newListFavs);
    return listFav;
  } catch (error) {
    throw new Error(error);
  }
}

function getAllListFavs() {
  const response = FavsModel.find();
  console.log('SERVICE: ', response);
  return response;
}

module.exports = {
  createListFavs,
  getAllListFavs,
};
