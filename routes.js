const users = require('./api/users');
const favs = require('./api/favs');
// const authLocal = require('./auth/local');

function routes(app) {
  app.use('/api/users', users);
  app.use('/api/favs', favs);
  // app.use('/auth/local', authLocal);
}

module.exports = routes;
