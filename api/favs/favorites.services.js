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
  return response;
}

async function getOneListFavs(id) {
  const listFavs = await FavsModel.findById(id);
  if(!listFavs){
    return null;
  }
  return listFavs;
}

async function updateOneListFavs(id, newItem) {
  const updateList = await FavsModel.findByIdAndUpdate(id, {$push: newItem}, { new: true });
  console.log('UPDATE: ', updateList);
  return updateList;
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
  updateOneListFavs,
  deleteOneListFavs,
};
