const { Router } = require('express');
const car = require('./CarRouter');
const user = require('./UserRouter');
const swagger = require('./SwaggerRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    car(server, new Router());
    user(server, new Router());
    swagger(server, new Router());

    next();
  });
};
