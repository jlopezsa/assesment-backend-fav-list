const users = require('./api/users');
const favorites = require('./api/favorites');
const authLocal = require('./auth/local');

function routes(app) {
  app.use('/api/users', users);
  app.use('/api/favorites', favorites);
  app.use('/auth/local', authLocal);
}
