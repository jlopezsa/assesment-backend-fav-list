const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectID } = Schema.Types;

const FavsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: ObjectID,
    ref: 'users',
    // required: true,
  },
  itemList: [{
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  }],
},
{
  timestamps: true,
  versionKey: false,
});

const Favs = mongoose.model('Favs', FavsSchema)

module.exports = Favs;
