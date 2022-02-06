const Joi = require('celebrate')
const CheckCpf = require('../../helper/CheckCPF')
const CheckDate = require('../../helper/CheckDate')

module.exports = async (req, res, next) => {
  try {
    const bodySchema = Joi.object().keys({
      nome: Joi.string()
        .required(),

      cpf: Joi.string()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (CheckCpf(value)) {
            return help.mesage('CPF inválido')
          }
          return true
        })
        .required(),

      data_nascimento: Joi.string()
        .custom((value, help) => {
          if (CheckDate(value)) {
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
