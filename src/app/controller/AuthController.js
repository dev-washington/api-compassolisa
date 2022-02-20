const UserSchema = require('../schema/UserSchema');

class AuthController {
  async create(req, res, next) {
    const { email, senha } = req.body;
    try {
      const user = await UserSchema.create(email, senha);
      return res.status(200).send(user);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new AuthController();
