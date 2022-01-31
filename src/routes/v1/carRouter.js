const carController = require('../../app/controller/carController')

module.exports = (server, routes, prefix = '/car') => {
  routes
    .post('/car', carController.create)
  server.use(prefix, routes)
}
