const CarService = require('../service/CarService')

class CarController {
  async create (req, res) {
    const payload = req.body
    try {
      const result = await CarService.create(payload)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async list (req, res) {
    const payload = req.params
    try {
      const result = await CarService.list(payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mesage)
    }
  }

  async findById (req, res) {
    try {
      const result = await CarService.findById(req.params.id)
      if (!result) {
        return res.status(204).json()
      } else {
        return res.status(200).json(result)
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async update (req, res) {
    const id = req.params
    const payload = req.body
    try {
      const result = await CarService.update(id, payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async delete (req, res) {
    try {
      const result = await CarService.delete(req.params.id)
      if (!result) {
        return res.status(400).json()
      }
      return res.status(204).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new CarController()
