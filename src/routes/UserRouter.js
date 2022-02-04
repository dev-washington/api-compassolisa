const UserController = require('../app/controller/UserController')
const createValidation = require('../app/validation/user/create')
const AuthController = require('../app/controller/AuthController')

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/authenticate', AuthController.create)
    .post('/user', createValidation, UserController.create)
    .get('/user', UserController.findAll)
    .get('/user/:id', UserController.getById)
  server.use(prefix, routes)
}
