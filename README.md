# assesment-backend-fav-
El proyecto de desarrolla para cumplir los siguientes requermientos:
### Contexto
```
The objective of this mission is to put into practice what you have learned in the program. The topics that will be covered are: Node.js, express, mongodb, testing.

The mission consists of two parts: first you will have to build a RestFul api and then you will have to answer a series of questions. In the mission report you must add the link to the project repository and the answers to the questions.The objective of this mission is to put into practice what you have learned in the program. The topics that will be covered are: Node.js, express, mongodb, testing.

The mission consists of two parts: first you will have to build a RestFul api and then you will have to answer a series of questions. In the mission report you must add the link to the project repository and the answers to the questions.

```
### Requermientos
```
- Each user will have a unique id, and he will authenticate using a non-empty email and a password.
- Each user will be able to save a list of favs. Each fav will have an title , description and link, and each list will be defined by a unique id and a name.
- The system have to allow the following actions:
  - Create a new list with a given name (auto-generate the unique id)
  - Get the users lists
  - Get an individual list for the user
  - Add items to a given list (based on the generated id)
  - All endpoints have to be secured with Bearer Auth (JWT)
-You should ensure that the password is strong enough
```

# Instrucciones para ejecutar el proyecto
1. Clonar proyecto localmente.
2. Instalar dependencias `npm install`
3. Ejecutar `npm run dev` para levantar el servidor

# Verificación del funcoinamiento de los endpoints
## Para verificar los endpoints, en el siguiente link se presentan los ensayos realizados [Link POSTMAN Here](https://documenter.getpostman.com/view/20060717/Uyxohj6n#d73814d4-1f07-4520-a8bb-df680415eea6).


# Install dependencies
Some dependences required:
```
npm i dotenv
npm i express
npm i morgan
npm i cors
npm i -D nodemon
```

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
