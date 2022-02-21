const Joi = require('joi');

const CheckCnpj = require();

module.exports = async (req, res, next) => {
  try {
    const bodySchema = Joi.object().keys({
      nome: Joi.string().required(),

      cnpj: Joi.string()
        .min(14)
        .max(14)
        .custom((value, help) => {
          if (CheckCnpj(value)) {
            return help.message('CNPJ inválido');
          }
          return true;
        })
        .required(),

      atividades: Joi.string().required(),

      endereco: Joi.array().items(Joi.object.required()).unique.required()
    });

    const { error } = await bodySchema.validate(req.body, { abortEarly: true });
    if (error) throw error;
    return next();
  } catch (error) {
    next(error);
    return res.status(400).json(error.message);
  }
};
