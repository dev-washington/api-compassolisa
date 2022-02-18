function CheckAge (yearBirth) {
  const year = new Date()
  if ((year.getFullYear - yearBirth) >= 18) {
    return true
  }
  return false
}
module.exports = CheckAge
