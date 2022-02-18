const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  data_nascimento: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  habilitado: {
    type: String,
    required: true
  }
})

UserSchema.plugin(mongoosePaginate)

const User = mongoose.model('User', UserSchema)

module.exports = User
