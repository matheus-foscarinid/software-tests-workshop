import { isPalindrome, capitalize } from '../src/string';


describe('isPalindrome', () => {
  test('detecta palíndromo', () => {
    expect(isPalindrome('arara')).toBe(true);
  });
  test('detecta não-palíndromo', () => {
    expect(isPalindrome('teste')).toBe(false);
  });
  test('ignora maiúsculas e caracteres especiais', () => {
    expect(isPalindrome('Ame a ema')).toBe(true);
  });
});

describe('capitalize', () => {
  test('capitaliza a primeira letra', () => {
    expect(capitalize('teste')).toBe('Teste');
  });
  test('não altera se já está capitalizado', () => {
    expect(capitalize('Teste')).toBe('Teste');
  });
  test('lida com strings vazias', () => {
    expect(capitalize('')).toBe('');
  });
});
