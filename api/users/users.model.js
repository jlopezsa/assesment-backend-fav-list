const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  firstName: {
    type: String,
    // required: true,
    trim: true,
    uppercase: true,
  },
  lastName: {
    type: String,
    // required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
},
{
  timestamps: true,
  versionKey: false,
});

UsersSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UsersSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return bcrypt.compare(candidatePassword, user.password);
};

UsersSchema.virtual('profile').get(function () {
  const {
    firstName, lastName, role, email,
  } = this;

  return {
    fullName: `${firstName} ${lastName}`,
    role,
    email,
  };
});

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users;
