# assesment-backend-fav-list

# Install dependencies
npm i dotenv

npm i express

npm i morgan

npm i cors

Final index.js configuration:

```
require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});

module.exports = require('./app');
```

Final ./config/express.js file confiuration
```
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

function configExpress(app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;

```

# Data base configuration
npm i mongoose

Final ./config/database.js configuration
```
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

```
