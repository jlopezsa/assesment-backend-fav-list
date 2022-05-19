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

async function getOneListFavs(id) {
  try {
    const listFavs = await FavsModel.findById(id);
    return listFavs;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createListFavs,
  getAllListFavs,
  getOneListFavs,
};
