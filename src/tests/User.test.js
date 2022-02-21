// eslint-disable-next-line no-undef
describe('Tests of Users', () => {
  // eslint-disable-next-line no-undef
  it('Should return route GET of user', () => {
    const expectation = [
      {
        nome: 'xavi',
        cpf: '000.000.000-45',
        data_nascimento: "14/10/2015",
        email: 'fulano@gmail.com.br',
        senha: "1223354",
        habilitado: "não"
      }
    ];
    const result = await findAll()
    expect(result).to.equal(expectation);
  });

  it('Should return route POST of user', () => {
    const car = [
      {


      }
    ];
  });
});
