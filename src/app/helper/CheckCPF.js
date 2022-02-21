function checkCpf(cpfNumber) {
  let sum = 0;
  let rest;

  if (cpfNumber === '00000000000' && cpfNumber.length !== 11) return false;

  for (let i = 1; i <= 9; i++) sum += parseInt(cpfNumber.substring(i - 1, i), 10) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (sum !== parseInt(cpfNumber.substring(9, 10), 10)) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpfNumber.substring(i - 1, i), 10) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpfNumber.substring(10, 11), 10)) return false;
  return true;
}

module.exports = checkCpf;
