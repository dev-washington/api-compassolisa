const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CarSchema = mongoose.Schema({
  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: String,
    required: true
  },
  acessorios: {
    type: Array,
    required: true
  },
  quantidadePassageiros: {
    type: Number,
    required: true
  }
})

CarSchema.plugin(mongoosePaginate)
const consult = {

  totalDocs: 'itemCount',
  limit: 'perPage',
  offset: 'offset',
  offsets: 'offsetCount'

}
const options = {
  page: 1,
  limit: 10,
  collaction: {
    locale: 'en'
  },
  customLabels: consult
}

const Car = mongoose.model('Car', CarSchema)

Car.paginate(consult, options).then(function (result) {
  result.itemCount = 3464
  result.limit = 100
  result.offset = 1
  result.offsets = 35
})

module.exports = Car
