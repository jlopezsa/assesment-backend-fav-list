const {
  createListFavs,
  getAllListFavs,
  getOneListFavs,
  updateOneListFavs,
  deleteOneListFavs,
} = require("./favorites.services");

async function handlerCreateListFavs(req, res) {
  const newListFavs = req.body;
  try {
    const listFavs = await createListFavs(newListFavs);
    res.status(201).json(listFavs);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllListFavs(req, res) {
  try {
    const favorites = await getAllListFavs();
    res.status(201).json(favorites);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetOneListFavs(req, res) {
  const { id } = req.params;
  const listFavs = await getOneListFavs(id);
  if(!listFavs){
    res.status(500).json({ messae: `Favorites list is not found` });
  }
  res.status(201).json(listFavs);
}

async function handlerUpdateListFavs(req, res) {
  const { id } = req.params;
  const newItem = req.body;
  const updateList = await updateOneListFavs(id, newItem);
  if(!updateList){
    res.status(400).json({ messae: `Favorites list is not found` });
  }
  res.status(201).json(updateList);
}

async function handlerDeleteOneListFavs(req, res) {
  const { id } = req.params;
  const response = await deleteOneListFavs(id);
  if(!response) {
    res.status(500).json({ message: `Favorites list in not found` });
  }
  res.status(201).json({ message: `Favorites list is deleted` });
}

module.exports = {
  handlerCreateListFavs,
  handlerGetAllListFavs,
  handlerGetOneListFavs,
  handlerUpdateListFavs,
  handlerDeleteOneListFavs,
};
