const Joi = require('joi')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string()
        .required(),

      cor: Joi.string()
        .required(),

      ano: Joi.Date()
        .format('yyyy')
        .min('1950')
        .max('2022')
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
    return res.status(400).json(error)
  }
}
