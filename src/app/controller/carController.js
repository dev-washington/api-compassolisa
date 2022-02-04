const CarService = require('../service/CarService')

class CarController {
  async create (req, res) {
    const addCar = req.body
    try {
      const result = await CarService.create(addCar)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new CarController()
