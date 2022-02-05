const UserRepository = require('../repository/UserRepository')

class UserService {
  async create (payload) {
    const result = await UserRepository.create(payload)
    return result
  }

  async list (payload) {
    const result = await UserRepository.list({
      nome: payload.nome,
      cpf: payload.cpf,
      data_nascimento: payload.data_nascimento,
      email: payload.email,
      senha: payload.senha,
      habilitado: payload.habilitado
    })
    return result
  }
}

module.exports = new UserService()
