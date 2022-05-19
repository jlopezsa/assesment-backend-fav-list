const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectID } = Schema.Types;

const FavoritesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: ObjectID,
    ref: 'users',
    required: true,
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
},{
  timestamps: true,
  versionKey: false,
});

const Favorites = mongoose.model('Favorites', FavoritesSchema)

module.exports = Favorites;
