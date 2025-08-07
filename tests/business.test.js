import { filterActiveAdults, averageAgeOfActive, getInactiveNames } from '../src/business';

describe('filterActiveAdults', () => {
  test('filtra apenas usuários ativos e maiores de idade', () => {
    const users = [
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Beto', idade: 17, ativo: true },
      { nome: 'Carla', idade: 22, ativo: false },
      { nome: 'Davi', idade: 30, ativo: true }
    ];
    const result = filterActiveAdults(users);
    expect(result).toEqual([
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Davi', idade: 30, ativo: true }
    ]);
  });
});

describe('averageAgeOfActive', () => {
  test('calcula média de idade dos ativos', () => {
    const users = [
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Beto', idade: 40, ativo: true },
      { nome: 'Carla', idade: 22, ativo: false }
    ];
    expect(averageAgeOfActive(users)).toBe(30);
  });
  test('retorna 0 se não há ativos', () => {
    const users = [
      { nome: 'Ana', idade: 20, ativo: false }
    ];
    expect(averageAgeOfActive(users)).toBe(0);
  });
});

describe('getInactiveNames', () => {
  test('retorna nomes dos inativos', () => {
    const users = [
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Beto', idade: 40, ativo: false },
      { nome: 'Carla', idade: 22, ativo: false }
    ];
    expect(getInactiveNames(users)).toEqual(['Beto', 'Carla']);
  });
  test('retorna array vazio se todos ativos', () => {
    const users = [
      { nome: 'Ana', idade: 20, ativo: true }
    ];
    expect(getInactiveNames(users)).toEqual([]);
  });
});
