const CarController = require('../app/controller/CarController')
// const createValidation = require('../app/validation/car/create')

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/car', CarController.create)
    .get('/car', CarController.list)
    .get('/car/:id', CarController.findOne)
    .put('/car/:id', CarController.update)
    .delete('/car/:id', CarController.delete)
  server.use(prefix, routes)
}
