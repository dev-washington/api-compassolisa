const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload) {
    return RentalSchema.create(payload);
  }

  async findAlll(payload) {
    return RentalSchema.findAll(payload);
  }

  async findById(id) {
    return RentalSchema.findById({
      _id: id
    });
  }

  async update() {
    const result = await RentalSchema.findByIdAndUpdate();
    return result;
  }

  async delete() {
    const result = await RentalSchema.findByIdAndDelete();
    return result;
  }
}

module.exports = RentalRepository;
