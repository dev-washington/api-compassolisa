// eslint-disable-next-line no-undef
describe('Tests of Rentals', () => {
  // eslint-disable-next-line no-undef
  it('Should return route GET of rental', () => {
    const expectation = [
      {
        nome: 'compassolisa',
        cnpj: '22.222.222/2222',
        atividades: 'Aluguel de Carros E Gestão de Frotas',
        endereco: 'rua luis delgado',
      }
    ];
    const result = await findAll()
    expect(result).to.equal(expectation);
  });

  it('Should return route POST of rental', () => {
    const expectation = [
        {

      
        }
    ];
  });
});
