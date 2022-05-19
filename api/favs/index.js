const { Router } = require('express');
const {
  handlerCreateListFavs,
  handlerGetAllListFavs,
} = require('./favorites.controller');

const router = Router();

router.post('/', handlerCreateListFavs);
router.get('/', handlerGetAllListFavs);

module.exports = router;
