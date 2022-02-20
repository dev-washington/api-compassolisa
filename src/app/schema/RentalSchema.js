const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  atividades: {
    type: String,
    required: true
  },
  endereco: {
    type: Array,
    required: true
  }
});

RentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model('Rental', RentalSchema);

module.exports = Rental;
