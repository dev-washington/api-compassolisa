const { Router } = require('express')
const car = require('../routes/CarRouter')
const user = require('../routes/UserRouter')
const swagger = require('../routes/SwaggerRouter')

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router())
    user(server, new Router())
    swagger(server, new Router())

    next()
  })
}
