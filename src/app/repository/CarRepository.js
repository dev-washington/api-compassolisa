const CarSchema = require('../schema/CarSchema')

class CarRepository {
  async create (payload) {
    return CarSchema.create(payload)
  }

  async findAll (payload) {
    return CarSchema.findAll(payload)
  }

  async getById (id) {
    return CarSchema.getById({
      _id: id
    })
  }
}

module.exports = new CarRepository()
