const { Router } = require('express');
const {
  handlerCreateListFavs,
  handlerGetAllListFavs,
  handlerGetOneListFavs,
  handlerDeleteOneListFavs,
  handlerUpdateListFavs,
} = require('./favorites.controller');

const router = Router();

const { isAuthenticated } = require('../../auth/auth.service');

router.post('/', isAuthenticated(), handlerCreateListFavs);
router.get('/', isAuthenticated(), handlerGetAllListFavs);
router.get('/:id', isAuthenticated(), handlerGetOneListFavs);
router.patch('/:id', isAuthenticated(), handlerUpdateListFavs)
router.delete('/:id', isAuthenticated(), handlerDeleteOneListFavs);

module.exports = router;
