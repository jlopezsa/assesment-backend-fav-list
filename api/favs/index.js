const { Router } = require('express');
const {
  handlerCreateListFavs,
  handlerGetAllListFavs,
  handlerGetOneListFavs,
} = require('./favorites.controller');

const router = Router();

router.post('/', handlerCreateListFavs);
router.get('/', handlerGetAllListFavs);
router.get('/:id', handlerGetOneListFavs);

module.exports = router;
