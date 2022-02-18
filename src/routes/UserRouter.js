const UserController = require('../app/controller/UserController')
const CheckCreate = require('../app/validation/user/create')
const AuthController = require('../app/controller/AuthController')

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/authenticate', AuthController.create)
    .post('/user', CheckCreate, UserController.create)
    .get('/user', UserController.findAll)
    .get('/user/:id', UserController.findById)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)
  server.use(prefix, routes)
}
