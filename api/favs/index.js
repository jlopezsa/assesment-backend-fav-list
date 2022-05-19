const { Router } = require('express');
const {
  handlerCreateListFavs,
  handlerGetAllListFavs,
  handlerGetOneListFavs,
  handlerDeleteOneListFavs,
} = require('./favorites.controller');

const router = Router();

router.post('/', handlerCreateListFavs);
router.get('/', handlerGetAllListFavs);
router.get('/:id', handlerGetOneListFavs);
router.delete('/:id', handlerDeleteOneListFavs);

module.exports = router;
