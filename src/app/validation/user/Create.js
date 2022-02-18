const Joi = require('joi')
const CheckCpf = require('../../helper/CheckCPF')
const CheckDate = require('../../helper/CheckDate')
const CheckAge = require('../../helper/CheckAge')

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

      data_nascimento: Joi.number()
        .custom((value, help) => {
          if (CheckDate(value)) {
            return help.mesage('Data inválida')
          }
          return true
        })
        .max('2022')
        .custom((value, help) => {
          if (CheckAge(value, help)) {
            return help.mesage('menor de 18')
          }
          return true
        })
        .required(),

      email: Joi.string()
        .required(),

      senha: Joi.string()
        .required(),

      hablitado: Joi.string()
        .Symbol('Sim')
        .Symbol('Não')
        .required()
    })

    const { error } = await bodySchema.validate(req.body, { abortEarl: true })

    if (error) throw error
    return next()
  } catch (error) {
    next(error)
    return res.status(400).json(error.message)
  }
}
