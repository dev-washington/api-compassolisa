const UserSchema = require('../schema/UserSchema')

class AuthController {
  async create (req, res) {
    try {
      const user = await UserSchema.create(req.body)
      return res.send({ user })
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' })
    }
  }
}

module.exports = new AuthController()
