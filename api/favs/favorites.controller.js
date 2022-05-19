const {
  createListFavs,
  getAllListFavs,
  getOneListFavs,
} = require('./favorites.services');

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
    console.log('FAVORITES: ', favorites);
    res.status(201).json(favorites);
  } catch (error) {
    console.log('ERROR: ', error);
    res.status(500).json(error);
  }
}

async function handlerGetOneListFavs(req, res) {
  const { id } = req.params;
  try {
    const listFavs = await getOneListFavs(id);
    res.status(201).json(listFavs);
  } catch (error) {
    res.status(500).json({ messae: `Favorites list is not found` });
  }
}

module.exports = {
  handlerCreateListFavs,
  handlerGetAllListFavs,
  handlerGetOneListFavs,
}
