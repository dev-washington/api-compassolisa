const Joi = require('celebrate')
const validCpf = require('../../helper/validCPF')
const validDate = require('../../helper/validDate')

module.exports = async (req, res, next) => {
  try {
    const bodySchema = Joi.object().keys({
      nome: Joi.string()
        .required(),

      cpf: Joi.string()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (validCpf(value)) {
            return help.mesage('CPF inválido')
          }
          return true
        })
        .required(),

      data_nascimento: Joi.string()
        .custom((value, help) => {
          if (validDate(value)) {
            return help.mesage('Data inválida')
          }
          return true
        })
        .required(),

      email: Joi.string()
        .required(),

      senha: Joi.string()
        .required(),

      hablitado: Joi.string()
        .default('sim')
        .required()
    })

    const { error } = await bodySchema.validate(req.body, { abortEarl: true })

    if (error) throw error
    return next()
  } catch (error) {
    next(error)
    return res.status(400).json()
  }
}
