const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('../../swagger.json');

module.exports = (server, prefix = '/api-docs') => {
  server.use(prefix, swaggerUI.serve, swaggerUI.setup(swaggerDocs));
};
