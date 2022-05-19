const mongoose = require('mongoose');
const { Schema } = mongoose;

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

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users;
