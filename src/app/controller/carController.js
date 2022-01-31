const carService = require('../service/carService')

class CarController {
  // metódo para cadastrar um carro
  static async create (req, res) {
    try {
      const insertCar = await carService.create(req.body)
      return res.status(201).json(insertCar)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // metódo para atualizar o carro
  static async update (req, res) {
    const { id } = req.params
    const updateCar = req.body
    try {
      const updatedCar = await carService.update(id, updateCar)
      return res.status(200).json(updatedCar)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // metódo para consultar o carro
  static async consult (req, res) {
    const { id } = req.params
    try {
      const consultCar = await carService.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(consultCar)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  // metódo para listar o carro
  static async list (req, res) {
    try {
      const listCar = await carService.findAll()
      return res.status(200).json(listCar)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  // metódo para deletar o carro
  static async delete (req, res) {
    const { id } = req.params
    try {
      const deleteCar = await carService.delete(id)
      return res.status(200).json(deleteCar)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new CarController()
