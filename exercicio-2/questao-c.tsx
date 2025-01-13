// QUESTÃO C) Escreva uma função que insira um registro na tabela ProdutoDesconto,
// recebendo como parâmetro o código do produto, a quantidade mínima para a faixa de preço e
// o valor a ser aplicado. (1 PONTO)

async function insertProductDiscount(
  code: number,
  quantity: number,
  value: number
): Promise<{ codigo: number; quantidade: number; valor: number } | null> {
  const queryInsert = `
      INSERT INTO ProdutoDesconto (codigo, quantidade, valor)
      VALUES (?, ?, ?)
      RETURNING codigo, quantidade, valor;
  `;

  try {
    const result = await createQuery(queryInsert, [code, quantity, value]);

    return result;
  } catch (error) {
    console.error('Erro ao inserir produto desconto:', error);
    return null;
  }
}

