const UsersModel = require("./users.model");

async function createUser(newUser) {
  try {
    const user = await UsersModel.create(newUser);
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

function getAllUsers() {
  const response = UsersModel.find();
  return response;
}

async function getOneUser(id) {
  const user = await UsersModel.findById(id);
  if(!user){
    return null;
  }
  return user;
}

async function deleteOneUser(id) {
  const user = await UsersModel.findByIdAndDelete(id);
  if(!user) {
    return null;
  }
  return user;
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
};
