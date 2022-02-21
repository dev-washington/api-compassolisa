class FieldInvalid extends Error {
  constructor(campo) {
    const mensagem = `The field ${campo} is invalid`;
    super(mensagem);
    this.name = 'Invalid Field';
  }
}

module.exports = FieldInvalid;
