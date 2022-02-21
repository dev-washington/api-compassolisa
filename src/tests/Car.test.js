// eslint-disable-next-line no-undef
describe('Tests of Cars', () => {
  // eslint-disable-next-line no-undef
  it('Should return route GET of car', () => {
    const expectation = [
      {
        modelo: 'GT-RF',
        cor: 'Prata',
        ano: 2015,
        acessorios: 'descricao: camera de re',
        quantidadePassageiros: 5
      }
    ];
    const result = await findAll()
    expect(result).to.equal(expectation);
  });

  it('Should return route POST of car', () => {
    const car = [
      {


      }
    ];
  });
});
