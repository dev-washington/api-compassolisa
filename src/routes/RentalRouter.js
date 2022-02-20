const RentalController = require('../app/controller/RentalController');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/rental', RentalController.create)
    .get('/rental', RentalController.findAll)
    .get('/rental/:id', RentalController.findById)
    .put('/rental/:id', RentalController.update)
    .delete('/rental/:id', RentalController.delete);
  server.use(prefix, routes);
};
