const CarService = require('../service/CarService');
const NotFound = require('../errors/NotFound');
const FieldInvalid = require('../errors/FieldInvalid');

class CarController {
  async create(req, res, next) {
    const payload = req.body;
    try {
      const result = await CarService.create(payload);
      return res.status(201).json(result);
    } catch (error) {
      if (error instanceof NotFound) {
        res.status(404);
        throw new NotFound();
      }

      if (error instanceof FieldInvalid) {
        res.status(400);
        throw new FieldInvalid();
      }
      return next(error);
    }
  }

  async findAll(req, res, next) {
    const { payload } = req.params;
    try {
      const result = await CarService.findAll(payload);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async findById(req, res, next) {
    const { id } = req.params;
    try {
      const result = await CarService.findById(id);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async queryParams(req, res, next) {
    const payload = req.params;
    try {
      const result = await CarService.queryParams(payload);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { payload } = req.body;
    try {
      const result = await CarService.update(id, payload);
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const result = await CarService.delete(id);
      return res.status(204).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CarController();
