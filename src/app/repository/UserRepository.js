const UserSchema = require('../schema/UserSchema')

class UserRepository {
  async create (payload) {
    return UserSchema.create(payload)
  }

  async list (payload) {
    return UserSchema.list(payload)
  }
}

module.exports = new UserRepository()
