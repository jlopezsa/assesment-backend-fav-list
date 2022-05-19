const { Router } = require('express');
const {
  handlerGetAllListFavs,
} = require('./favorites.controller');

const router = Router();

router.get('/', handlerGetAllListFavs);

module.exports = router;
