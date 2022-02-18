const CarSchema = require('../schema/CarSchema')
const NotFound = require('../errors/NotFound')

class CarRepository {
  async create (payload) {
    return CarSchema.create(payload)
  }

  async findAll (payload) {
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
    return CarSchema.paginate(payload, options, {})
  }

  async findById (id) {
    const result = CarSchema.findById

    result({
      _id: id
    })
    if (!result) {
      throw new NotFound()
    }
    return result
  }

  async update (id, payload) {
    console.log(payload)
    const result = await CarSchema.findByIdAndUpdate({
      _id: id,
      _payload: payload.modelo,
      _payload: payload.cor,
      _payload: payload.ano,
      _payload: payload.acessorios,
      _payload: payload.quantidadePassageiros

    })
    return result
  }

  async delete (id) {
    return CarSchema.findByIdAndDelete(id)
  }
}

module.exports = new CarRepository()
