const UsersModel = require("./users.model");

async function createUser(newUser) {
  const { password } = newUser;
  if(password.length < 6 ){
    console.log('Password require more than six characters');
    throw new Error(error);
  } else {
    try {
      const user = await UsersModel.create(newUser);
      return user;
    } catch (error) {
      throw new Error(error);
    }
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

async function getUserByEmail(email) {
  const user = await UsersModel.findOne({ email });
  return user;
}

async function findOneUser(query) {
  const user = await UsersModel.findOne(query);
  return user;
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  getUserByEmail,
  findOneUser,
};
