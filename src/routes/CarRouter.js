const CarController = require('../app/controller/CarController')
// const createValidation = require('../app/validation/car/create')

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/car', CarController.create)
  server.use(prefix, routes)
}
