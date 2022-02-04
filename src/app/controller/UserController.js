const UserService = require('../service/UserService')

class UserController {
  async create (req, res) {
    const add = req.body
    try {
      const result = await UserService.create(add)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new UserController()
