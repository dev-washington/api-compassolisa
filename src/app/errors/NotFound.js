class NotFound extends Error {
  constructor () {
    super('Carro não foi encontrado')
    this.name = 'NotFound'
  }
}

module.exports = NotFound
