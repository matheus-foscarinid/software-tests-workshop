import { filterActiveAdults, averageAgeOfActive, getInactiveNames } from '../src/business';

describe('filterActiveAdults', () => {
  test('filtra apenas usuários ativos e maiores de idade', () => {
    // Preparar
    const users = [
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Beto', idade: 17, ativo: true },
      { nome: 'Carla', idade: 22, ativo: false },
      { nome: 'Davi', idade: 30, ativo: true }
    ];

    // Agir
    const result = filterActiveAdults(users);

    // Verificar
    expect(result).toEqual([
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Davi', idade: 30, ativo: true }
    ]);
  });
});

describe('averageAgeOfActive', () => {
  test('calcula média de idade dos ativos', () => {
    // Preparar
    const users = [
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Beto', idade: 40, ativo: true },
      { nome: 'Carla', idade: 22, ativo: false }
    ];

    // Agir
    const resultado = averageAgeOfActive(users);

    // Verificar
    expect(resultado).toBe(30);
  });
  test('retorna 0 se não há ativos', () => {
    // Preparar
    const users = [
      { nome: 'Ana', idade: 20, ativo: false }
    ];

    // Agir
    const resultado = averageAgeOfActive(users);

    // Verificar
    expect(resultado).toBe(0);
  });
});

describe('getInactiveNames', () => {
  test('retorna nomes dos inativos', () => {
    // Preparar
    const users = [
      { nome: 'Ana', idade: 20, ativo: true },
      { nome: 'Beto', idade: 40, ativo: false },
      { nome: 'Carla', idade: 22, ativo: false }
    ];

    // Agir
    const resultado = getInactiveNames(users);

    // Verificar
    expect(resultado).toEqual(['Beto', 'Carla']);
  });
  test('retorna array vazio se todos ativos', () => {
    // Preparar
    const users = [
      { nome: 'Ana', idade: 20, ativo: true }
    ];

    // Agir
    const resultado = getInactiveNames(users);

    // Verificar
    expect(resultado).toEqual([]);
  });
});
