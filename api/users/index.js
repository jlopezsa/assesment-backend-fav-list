const { Router } = require('express');
const {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerDeleteOneUser,
} = require('./users.controller');

const router = Router();

router.post('/', handlerCreateUser);
router.get('/', handlerGetAllUsers);
router.get('/:id', handlerGetOneUser);
router.delete('/:id', handlerDeleteOneUser);

module.exports = router;
