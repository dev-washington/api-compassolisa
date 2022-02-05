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

  async list (req, res, next) {
    const payload = req.params
    try {
      const result = await CarService.list({
        modelo: payload.modelo,
        cor: payload.cor,
        ano: payload.ano,
        acessorios: payload.acessorios,
        quantidadePassageiros: payload.quantidadePassageiros
      })
      return res.status(200).json(result)
    } catch (error) {
      next(error)
      return res.status(500).json(error.mesage)
    }
  }

  async findOne (req, res) {
    const { id } = req.params
    try {
      const result = await CarService.findOne({
        where: {
          id: Number(id)
        }
      })
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
    const { id } = req.params
    const updateCar = req.body
    try {
      const result = await CarService.update(id, updateCar)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async delete (req, res) {
    const { id } = req.params
    try {
      const response = await CarService.delete(id)
      if (!id) {
        return res.status(400).json()
      }
      return res.status(204).json(response)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new CarController()
