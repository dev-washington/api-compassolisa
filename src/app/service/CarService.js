const CarRepository = require('../repository/CarRepository')

class CarService {
  async create (payload) {
    const result = await CarRepository.create(payload)
    return result
  }

  async list (payload) {
    const result = await CarRepository.list(payload)

    return result
  }

  async findById (id) {
    const result = await CarRepository.findById(id)

    return result
  }

  async update (id, payload) {
    const result = await CarRepository.update({})
    return result
  }

  async delete (id) {
    const result = await this.findById(id)
    await CarRepository.delete(result)
    return result
  }
}

module.exports = new CarService()
