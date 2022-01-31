const carRepository = require('../repository/carRepository')

class CarService {
  async create (playload) {
    const result = await carRepository.create(playload)
    return result
  }
}

module.exports = new CarService()
