const CarController = require('../app/controller/CarController');
const CheckCreate = require('../app/validation/car/Create');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/car', CheckCreate, CarController.create)
    .get('/car', CarController.findAll)
    .get('/car/:id', CarController.findById)
    .patch('/car:id/acessorios', CarController.queryParams)
    .put('/car/:id', CarController.update)
    .delete('/car/:id', CarController.delete);
  server.use(prefix, routes);
};
