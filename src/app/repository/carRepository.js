const schema = require('../schema/carSchema')

class CarRepository {
  async create (playload) {
    return schema.create(playload)
  }
}

module.exports = new CarRepository()
