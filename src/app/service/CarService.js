const CarRepository = require('../repository/CarRepository')

class CarService {
  async create (payload) {
    const result = await CarRepository.create(payload)
    return result
  }

  async findAll (payload) {
    const carList = await CarRepository.findAll(payload)
    carList.map((car) => {
      return new CarRepository(car.modelo, car.cor, car.ano, car.acessorios, car.quantidadePassageiros)
    })

    return carList
  }

  async getById (id) {
    const oneCar = await CarRepository.getById(id)

    return new CarRepository(oneCar.modelo, oneCar.cor, oneCar.ano, oneCar.acessorios, oneCar.quantidadePassageiros)
  }

  async update (id, body) {
    const carUp = await CarRepository.update(id, new CarRepository(body.modelo, body.cor, body.ano, body.acessorios, body.quantidadePassageiros))
    const result = carUp.value
    return new CarRepository(result.modelo, result.cor, result.ano, result.acessorios, result.quantidadePassageiros)
  }
}

module.exports = new CarService()
