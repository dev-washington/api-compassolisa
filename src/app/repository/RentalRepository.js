const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  async create(payload) {
    return RentalSchema.create(payload);
  }

  async findAll(payload) { 
     const myCustomLabels = {
      totalDocs: 'total',
      docs: 'veiculos',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      totalPages: 'offsets',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    };

    const options = {
      page: 1,
      limit: 100,
      customLabels: myCustomLabels
    };
    return RentalSchema.paginate(payload, options, {});
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
