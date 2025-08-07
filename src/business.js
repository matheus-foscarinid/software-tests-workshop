// Filtra usuários ativos maiores de idade
export const filterActiveAdults = (users) => {
  // users: array de objetos { nome, idade, ativo }
  return users.filter(user => user.ativo && user.idade >= 18);
}

// Calcula a média de idade dos usuários ativos
export const averageAgeOfActive = (users) => {
  const ativos = users.filter(u => u.ativo);
  if (ativos.length === 0) return 0;
  const soma = ativos.reduce((acc, u) => acc + u.idade, 0);
  return soma / ativos.length;
}

// Retorna um array de nomes dos usuários inativos
export const getInactiveNames = (users) => {
  return users.filter(u => !u.ativo).map(u => u.nome);
}
