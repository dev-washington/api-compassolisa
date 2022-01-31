const express = require('express')
const routes = require('./routes/v1/index')
const database = require('./infra/database/mongo/index')

class App {
  static async init (env) {
    this.server = express()
    this.middleware()
    this.route()

    try {
      await database.init(env)
    } catch (error) {
      console.log(error)
    }
  }

  middleware () {
    this.server.use(express.json())
  }

  route () {
    routes(this.server)
  }
}

module.exports = App
