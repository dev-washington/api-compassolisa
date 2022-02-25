function checkCnjp(cnpjNumber) {
  if (!cnpjNumber) return false;

  const isString = typeof cnpjNumber === 'string';
  const validTypes = isString || Number.isInteger(cnpjNumber) || Array.isArray(cnpjNumber);

  if (!validTypes) return false;

  if (isString) {
    if (cnpjNumber.length > 18) return false;

    const digitsOnly = /^\d{14}$/.test(cnpjNumber);
    // Teste Regex para verificar se é uma string formatada válida
    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(cnpjNumber);

    // Se o formato é válido, usa um truque para seguir o fluxo da validação
    // eslint-disable-next-line no-unused-expressions
    if (digitsOnly || validFormat) true;
    // Se não, retorna inválido
    else return false;
  }

  // Guarda um array com todos os dígitos do valor
  const match = cnpjNumber.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : [];

  // Valida a quantidade de dígitos
  if (numbers.length !== 14) return false;

  // Elimina inválidos com todos os dígitos iguais
  const items = [...new Set(numbers)];
  if (items.length === 1) return false;

  // Cálculo validador
  const calc = (x) => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      // eslint-disable-next-line no-plusplus
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
  };

  // Separa os 2 últimos dígitos de verificadores
  const digits = numbers.slice(12);

  // Valida 1o. dígito verificador
  const digit0 = calc(12);
  if (digit0 !== digits[0]) return false;

  // Valida 2o. dígito verificador
  const digit1 = calc(13);
  return digit1 === digits[1];
}

module.exports = checkCnjp;
