// importando o mongo
const mongoose = require('mongoose')

// criar a tabela carro
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

const Car = mongoose.model('Car', CarSchema)

module.exports = Car