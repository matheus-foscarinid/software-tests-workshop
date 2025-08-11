import { isPalindrome, capitalize } from '../src/string';


describe('isPalindrome', () => {
  test('detecta palíndromo', () => {
    // Preparar
    const texto = 'arara';

    // Agir
    const resultado = isPalindrome(texto);

    // Verificar
    expect(resultado).toBe(true);
  });
  test('detecta não-palíndromo', () => {
    // Preparar
    const texto = 'teste';

    // Agir
    const resultado = isPalindrome(texto);

    // Verificar
    expect(resultado).toBe(false);
  });
  test('ignora maiúsculas e caracteres especiais', () => {
    // Preparar
    const texto = 'Ame a ema';

    // Agir
    const resultado = isPalindrome(texto);

    // Verificar
    expect(resultado).toBe(true);
  });
});

describe('capitalize', () => {
  test('capitaliza a primeira letra', () => {
    // Preparar
    const texto = 'teste';

    // Agir
    const resultado = capitalize(texto);

    // Verificar
    expect(resultado).toBe('Teste');
  });
  test('não altera se já está capitalizado', () => {
    // Preparar
    const texto = 'Teste';

    // Agir
    const resultado = capitalize(texto);

    // Verificar
    expect(resultado).toBe('Teste');
  });
  test('lida com strings vazias', () => {
    // Preparar
    const texto = '';

    // Agir
    const resultado = capitalize(texto);

    // Verificar
    expect(resultado).toBe('');
  });
});
