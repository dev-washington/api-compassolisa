const UserSchema = require('../schema/UserSchema')

class UserRepository {
  async create (payload) {
    return UserSchema.create(payload)
  }

  async findAll (payload) {
    return UserSchema.findAll(payload)
  }
}

module.exports = new UserRepository()
