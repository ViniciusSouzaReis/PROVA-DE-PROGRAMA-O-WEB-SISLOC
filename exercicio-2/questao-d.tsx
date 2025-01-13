// QUESTÃO D) Com base nas funções anteriores, escreva uma função para inserir exatamente os
// dados do exercício 1, para o produto "Kit de Bolinhos do Chef Bolão". Comente sobre sua
// implementação e possíveis adaptações. (1,5 PONTO)

const DISCOUNT_QUANTIY_1 = 11;
const DISCOUNT_QUANTIY_2 = 21;

async function insertProductAndDiscounts(
  productName: string = "Kit de Bolinhos do Chef Bolão"
): Promise<Boolean> {
  try {
    const productCode = await insertProduct(productName, FIRST_CONDITION_UNITY_PRICE);
    if (!productCode) {
      throw new Error("Failed to insert product.");
    }

    const discountRanges = [
      { quantity: DISCOUNT_QUANTIY_1, value: SECOND_CONDITION_UNITY_PRICE },
      { quantity: DISCOUNT_QUANTIY_2, value: THIRD_CONDITION_MIN_BOXES },
    ];

    for (const range of discountRanges) {
      const discountInserted = await insertProductDiscount(productCode, range.quantity, range.value);
      if (!discountInserted) {
        throw new Error("Failed to insert product discount.");
      }
    }

    return true;
  } catch (error) {
    console.error("Error inserting product and discounts:", error);
    return false;
  }
}


// RESPOSTA
// A implementação visa inserir um produto e suas faixas de desconto conforme as condições de preço especificadas.
// A função foi construída para garantir que todos os dados necessários sejam inseridos corretamente no banco de dados e que o preço total seja calculado de acordo com as regras fornecidas.

// Possíveis adaptações:
// O tratamento de erros pode ser melhorado a depender de qual camada da aplicação a função está sendo utilizada.
// A função insertProductAndDiscounts pode ser dividida em mais funções auxiliares, tornando o código mais modular.
