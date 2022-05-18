const express = require('express');

function configExpress(app) {
  app.use(express.json());
}

module.exports = configExpress;
