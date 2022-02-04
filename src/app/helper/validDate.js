function checkDate (data) {
  return data instanceof Date && !isNaN(data)
}

module.exports = checkDate
