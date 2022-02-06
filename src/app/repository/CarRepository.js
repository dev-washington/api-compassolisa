const CarSchema = require('../schema/CarSchema')

class CarRepository {
  async create (payload) {
    return CarSchema.create(payload)
  }

  async list (payload) {
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
    }

    const options = {
      page: 1,
      limit: 100,
      customLabels: myCustomLabels
    }
    return CarSchema.paginete(payload, options, {})
  }

  async findById (id) {
    return CarSchema.findById({
      _id: id
    })
  }

  async update (id, payload) {
    const result = await CarSchema.findByIdAndUpdate(id, payload, { new: true })
    return result
  }

  async delete (id) {
    return CarSchema.deleteOne(id)
  }
}

module.exports = new CarRepository()
