const {
  getAllListFavs,
} = require('./favorites.services');

async function handlerGetAllListFavs(req, res) {
  try {
    const favorites = await getAllListFavs();
    res.status(201).json(favorites);
  } catch (error) {
    res.status(500).json(error);
  }
}
