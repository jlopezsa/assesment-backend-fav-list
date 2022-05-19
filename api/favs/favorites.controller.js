const {
  getAllListFavs,
} = require('./favorites.services');

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

module.exports = {
  handlerGetAllListFavs,
}
