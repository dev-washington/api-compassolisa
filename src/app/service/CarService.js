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
}

module.exports = new CarService()
