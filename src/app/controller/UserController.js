const UserService = require('../service/UserService');

class UserController {
  async create(req, res) {
    const payload = req.body;
    try {
      const result = await UserService.create(payload);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async findAll(req, res) {
    const payload = req.params;
    try {
      const result = await UserService.findAll(payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async findById(req, res) {
    const { id } = req.params;
    try {
      const result = await UserService.findById(id);
      if (!result) {
        return res.status(204).json();
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    const id = req.params;
    const payload = req.body;
    try {
      const result = await UserService.update(id, payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await UserService.delete(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new UserController();
