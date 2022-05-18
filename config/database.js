require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

async function connectDB() {
  try {
    console.log(URI);
    await mongoose.connect(URI);
    console.log('Mongoo DB is connected')
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
