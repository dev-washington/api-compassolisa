// importando o mongo
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// criar a tabela carro
const carSchema = new Schema({
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
    reequired: true
  },
  quantidadePassageeiros: {
    type: Number,
    required: true
  }
})

const Car = mongoose.model('Car', carSchema)
// exportando o modelo carro
module.exports = Car
