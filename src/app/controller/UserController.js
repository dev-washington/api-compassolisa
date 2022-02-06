const UserService = require('../service/UserService')

class UserController {
  async create (req, res) {
    const payload = req.body
    try {
      const result = await UserService.create(payload)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async list (req, res) {
    const payload = req.params
    try {
      const result = await UserService.list(payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async findById (req, res) {
    try {
      const result = await UserService.findById(req.params.id)
      if (!result) {
        return res.status(204).json()
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async update (req, res) {
    const id = req.params
    const payload = req.body
    try {
      const result = await UserService.update(id, payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async delete (req, res) {
    try {
      const result = await UserService.delete(req.params.id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new UserController()
