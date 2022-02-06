const UserSchema = require('../schema/UserSchema')

class UserRepository {
  async create (payload) {
    return UserSchema.create(payload)
  }

  async list (payload) {
    const result = await UserSchema.find(payload)
    return result
  }

  async findById (id) {
    return UserSchema.findById({
      _id: id
    })
  }

  async update (id, payload) {
    const result = await UserSchema.findByIdAndUpdate(id, payload)
    return result
  }

  async delete (id) {
    return UserSchema.deleteOne(id)
  }
}

module.exports = new UserRepository()
