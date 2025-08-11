import { add, subtract, multiply, divide } from '../src/math';

describe('add', () => {
  test('soma dois números positivos', () => {
    // Preparar
    const num1 = 2;
    const num2 = 3;

    // Agir
    const resultado = add(num1, num2);

    // Verificar
    expect(resultado).toBe(5);
  });
  test('soma números negativos', () => {
    // Preparar
    const num1 = -2;
    const num2 = -3;

    // Agir
    const resultado = add(num1, num2);

    // Verificar
    expect(resultado).toBe(-5);
  });
  test('soma com zero', () => {
    // Preparar
    const num1 = 0;
    const num2 = 5;

    // Agir
    const resultado = add(num1, num2);

    // Verificar
    expect(resultado).toBe(5);
  });
});

describe('subtract', () => {
  test('subtrai dois números', () => {
    // Preparar
    const num1 = 5;
    const num2 = 3;

    // Agir
    const resultado = subtract(num1, num2);

    // Verificar
    expect(resultado).toBe(2);
  });
  test('subtrai negativos', () => {
    // Preparar
    const num1 = -2;
    const num2 = -3;

    // Agir
    const resultado = subtract(num1, num2);

    // Verificar
    expect(resultado).toBe(1);
  });
});

describe('multiply', () => {
  test('multiplica dois números', () => {
    // Preparar
    const num1 = 2;
    const num2 = 3;

    // Agir
    const resultado = multiply(num1, num2);

    // Verificar
    expect(resultado).toBe(6);
  });
  test('multiplica por zero', () => {
    // Preparar
    const num1 = 5;
    const num2 = 0;

    // Agir
    const resultado = multiply(num1, num2);

    // Verificar
    expect(resultado).toBe(0);
  });
});

describe('divide', () => {
  test('divide dois números', () => {
    // Preparar
    const num1 = 6;
    const num2 = 3;

    // Agir
    const resultado = divide(num1, num2);

    // Verificar
    expect(resultado).toBe(2);
  });
  test('lança erro ao dividir por zero', () => {
    // Preparar
    const num1 = 5;
    const num2 = 0;

    // Agir e Verificar
    expect(() => divide(num1, num2)).toThrow('Divisão por zero não é permitida');
  });
});
