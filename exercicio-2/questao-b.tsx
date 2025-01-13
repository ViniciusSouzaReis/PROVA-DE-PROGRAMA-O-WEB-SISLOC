// QUESTÃO B) Escreva uma função que insira um registro na tabela Produto, recebendo como
// parâmetro o nome do produto e o valor inicial. A função deve retornar o código do produto
// recém-criado. Atenção: Agora sim é código fonte, não função de banco de dados. A partir desta
// questão, se atentar a código fonte de programação. Programação somente em banco de dados
// não serão considerados. Dica adicional: Considere que já existe no sistema um método genérico
// de nome createQuery, que já encapsule a conexão com o banco de dados. Utilize para fazer
// typecast como bem entender, receber os parâmetros que julgar necessário ou que ele já seja
// genericamente de uma classe que você já tenha familiaridade. (1 PONTO)

async function insertProduct(name: string, value: number): Promise<number | null> {
  const queryInsert = `
    INSERT INTO Produto (name, value)
    VALUES (?, ?)
    RETURNING codigo;
  `;

  try {
    const result = await createQuery(queryInsert, [name, value]);
    return result.codigo;
  } catch (error) {
    console.error('Erro ao inserir produto:', error);
    return null;
  }
}
