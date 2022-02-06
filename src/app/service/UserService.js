const UserRepository = require('../repository/UserRepository')

class UserService {
  async create (payload) {
    const result = await UserRepository.create(payload)
    return result
  }

  async list (payload) {
    const result = await UserRepository.list(payload)
    return result
  }

  async findById (id) {
    const result = await UserRepository.findById(id)
    return result
  }
}

module.exports = new UserService()
