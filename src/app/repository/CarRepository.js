const CarSchema = require('../schema/CarSchema')

class CarRepository {
  async create (payload) {
    return CarSchema.create(payload)
  }

  async findAll (payload) {
    return CarSchema.findAll(payload)
  }
}

module.exports = new CarRepository()
