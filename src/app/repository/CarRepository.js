const CarSchema = require('../schema/CarSchema')

class CarRepository {
  async create (payload) {
    return CarSchema.create(payload)
  }

  async list (payload) {
    const result = await CarSchema.find(payload)

    return result
  }

  async findOne (id) {
    return CarSchema.findOne(id)
  }

  async update (payload) {
    return CarSchema.updateOne(payload)
  }

  async delete (id) {
    return CarSchema.deleteOne(id)
  }
}

module.exports = new CarRepository()
