function checkDate(data) {
  // eslint-disable-next-line no-restricted-globals
  return data instanceof Date && !isNaN(data);
}

module.exports = checkDate;
