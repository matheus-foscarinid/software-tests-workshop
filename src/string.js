// Nivel Medio

// Capitaliza a primeira letra de uma string
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Verifica se uma string é um palíndromo
export const isPalindrome = (str) => {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
