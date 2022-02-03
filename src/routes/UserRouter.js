const UserController = require('../app/controller/UserController')
const createValidation = require('../app/validation/user/create')

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/user', createValidation, UserController.create)
    .get('/user', UserController.findAll)
  server.use(prefix, routes)
}
