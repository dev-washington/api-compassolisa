const Joi = require('joi')
const validDate = require('../../helper/checkDate')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string()
        .required(),

      cor: Joi.string()
        .required(),

      ano: Joi.string()
        .min('1950')
        .max('2022')
        .custom((value, help) => {
          if (validDate(value)) {
            return help.message('Ano Inválido')
          } else {
            return true
          }
        })
        .required(),

      acessorios: Joi.array()
        .items(
          Joi.object()
            .required()
        )
        .unique()
        .required(),

      quantidadePassageiros: Joi.number()
        .required()
    })

    const { error } = await schema.validate(req.body, { abortEarly: true })
    if (error) throw error
    return next()
  } catch (error) {
    return res.status(400).json(error.mensage)
  }
}
