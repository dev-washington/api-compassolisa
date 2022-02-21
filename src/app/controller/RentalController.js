const RentalService = require('../service/RentalService');

class RentalController {
  async create(req, res, next) {
    const payload = req.body;
    try {
      const result = await RentalService.create(payload);
      return res.status(201).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req, res, next) {
    const { payload } = req.params;
    try {
      const result = await RentalService.findAll(payload);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async findById(req, res, next) {
    const { id } = req.params;
    try {
      const result = await RentalService.findById(id);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    const { id, payload } = req.params;
    try {
      const result = await RentalService.update(id, payload);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const result = await RentalService.delete(id);
      return res.status(204).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new RentalController();
