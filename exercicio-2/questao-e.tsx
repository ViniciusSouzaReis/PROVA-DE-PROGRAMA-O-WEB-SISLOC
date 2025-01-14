// QUESTÃO E) Escreva uma função que receba o código do produto e a quantidade a ser
// comprada, e retorne o valor total da compra. A função deve consultar as tabelas Produto e
// ProdutoDesconto para realizar os cálculos corretamente. Nesta questão deverá ser feito
// consultas às tabelas criadas no exercício anterior, de forma que implemente um algoritmo
// baseado na questão (A), porém com valores armazenados e não fixos. Atenção para o fato de
// que no exercício (A) só temos duas faixas mas, neste exercício, as faixas estarão armazenadas
// na tabela. (4 PONTOS)

async function calculateTotalPrice(productCode: number, quantity: number): Promise<number | null> {
  const queryProduct = `
    SELECT valor 
    FROM Produto
    WHERE codigo = ?;
  `;

  try {
    const productResult = await createQuery(queryProduct, [productCode]);

    if (!productResult) {
      console.error('Product not found');
      return null;
    }

    let unitPrice = productResult.valor;
    let totalPrice = 0;

    const queryDiscounts = `
      SELECT quantidade, valor
      FROM ProdutoDesconto
      WHERE codigo = ? AND quantidade <= ?
      ORDER BY quantidade DESC;
    `;

    const discountsResult = await createQuery(queryDiscounts, [productCode, quantity]);
    let remainingQuantity = quantity;
    if (discountsResult && discountsResult.length > 0) {
      for (const discount of discountsResult) {
        const discountQuantity = discount.quantidade;
        const discountValue = discount.valor;

        if (remainingQuantity >= discountQuantity) {
          totalPrice += discountValue * remainingQuantity;
          remainingQuantity = 0;
          break;
        } else {
          totalPrice += discountValue * remainingQuantity;
          remainingQuantity -= discountQuantity;
        }
      }
    }

    if (remainingQuantity > 0) {
      totalPrice += unitPrice * remainingQuantity;
    }

    return totalPrice;
  } catch (error) {
    console.error('Erro ao calcular o valor total da compra:', error);
    return null;
  }
}

// Resposta:
// O algoritmo considera múltiplas faixas de desconto, permitindo que o modelo atenda cenários com diferentes regras.
// Ordenar os descontos por quantidade DESC permite aplicar o desconto mais vantajoso de forma direta.