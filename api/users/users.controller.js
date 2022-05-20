const {
  createUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
} = require("./users.services");

const crypto = require('crypto');

async function handlerCreateUser(req, res) {
  const newUser = req.body;
  try {
    const hash = crypto.createHash('sha256')
    .update(newUser.email)
    .digest('hex');
    newUser.passwordResetToken = hash;
    newUser.passwordResetExpires = Date.now() + 3600000 * 24;
    const user = await createUser(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function handlerGetAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetOneUser(req, res) {
  const { id } = req.params;
  const user = await getOneUser(id);
  if(!user){
    res.status(500).json({ message: `User is not found` });
  }
  res.status(201).json(user);
}

async function handlerDeleteOneUser(req, res) {
  const { id } = req.params;
  const response = await deleteOneUser(id);
  if(!response) {
    res.status(500).json({ message: `User is not found` });
  }
  res.status(201).json({ message: `User was deleted` });
}

module.exports = {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerDeleteOneUser,
};
