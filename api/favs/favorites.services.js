const FavsModel = require("./favorites.model");

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
  console.log("SERVICE: ", response);
  return response;
}

async function getOneListFavs(id) {

  const listFavs = await FavsModel.findById(id);
  if(!listFavs){
    return null;
  }
  return listFavs;
}

async function deleteOneListFavs(id) {
  const listFavs = await FavsModel.findByIdAndDelete(id);
  if(!listFavs) {
    return null;
  }
  return listFavs;
}

module.exports = {
  createListFavs,
  getAllListFavs,
  getOneListFavs,
  deleteOneListFavs,
};
