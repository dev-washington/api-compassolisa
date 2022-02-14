const { Router } = require('express')
const car = require('../routes/CarRouter')
const user = require('../routes/UserRouter')
const swagger = require('../routes/SwaggerRouter')

module.exports = server => {
  server.use((req, res, next) => {
    user(server, new Router())
    next()
  })
}

module.exports = server => {
  server.use((req, res, next) => {
    car(server, new Router())
    next()
  })
}

module.exports = server => {
  server.use((req, res, next)=>{
    swagger(server, new Router())
    next()
  })
}
