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
  app.use(corse());
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;

```
