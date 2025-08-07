import { add, subtract, multiply, divide } from '../src/math';

describe('add', () => {
  test('soma dois números positivos', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('soma números negativos', () => {
    expect(add(-2, -3)).toBe(-5);
  });
  test('soma com zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});

describe('subtract', () => {
  test('subtrai dois números', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  test('subtrai negativos', () => {
    expect(subtract(-2, -3)).toBe(1);
  });
});

describe('multiply', () => {
  test('multiplica dois números', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test('multiplica por zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divide dois números', () => {
    expect(divide(6, 3)).toBe(2);
  });
  test('lança erro ao dividir por zero', () => {
    expect(() => divide(5, 0)).toThrow('Divisão por zero não é permitida');
  });
});
