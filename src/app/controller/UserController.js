const UserService = require('../service/UserService')

class UserController {
  async create (req, res) {
    const addUser = req.body
    try {
      const result = await UserService.create(addUser)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }

  async findAll (req, res) {
    const payload = req.params
    try {
      const response = await UserService.findAll({
        nome: payload.nome,
        cpf: payload.cpf,
        data_nascimento: payload.data_nascimento,
        email: payload.email,
        senha: payload.senha,
        habilitado: payload.habilitado
      })
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json(error.mensage)
    }
  }
}

module.exports = new UserController()
