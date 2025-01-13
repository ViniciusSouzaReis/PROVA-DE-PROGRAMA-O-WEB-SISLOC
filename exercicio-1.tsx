// EXERCÍCIO 1 - LÓGICA BÁSICA (1,5 PONTOS)
// Uma distribuidora vende pacotes de produtos com a seguinte tabela de preços para caixas de
// "Bolinhos do Chef" no evento "Feira Gastronômica Local":
// • Até 10 caixas: R$ 30,00 por unidade.
// • Entre 11 e 20 caixas: R$ 25,00 por unidade adicional.
// • Acima de 20 caixas: R$ 20,00 por unidade adicional.
// Por exemplo, para 25 caixas vendidas, o cálculo deve ser:
// 10 x 30 + 10 x 25 + 5 x 20.
// Escreva uma função reutilizável que receba a quantidade de caixas a ser vendida e retorne o
// valor total da venda. Explique (com suas palavras) por que a abordagem escolhida é eficiente e
// reutilizável.

const FIRST_CONDTION_MAX_BOXES = 10;
const FIRST_CONDITION_UNITY_PRICE = 30;

const SECOND_CONDITION_MAX_BOXES = 20;
const SECOND_CONDITION_UNITY_PRICE = 25;

const THIRD_CONDITION_MIN_BOXES = 20;

function calculateSalesPrice(boxes: number): number {
    let price = 0;

    if (boxes <= FIRST_CONDTION_MAX_BOXES) {
        price = boxes * FIRST_CONDITION_UNITY_PRICE;
    } else if (boxes <= SECOND_CONDITION_MAX_BOXES) {
        price = FIRST_CONDTION_MAX_BOXES * FIRST_CONDITION_UNITY_PRICE + (boxes - SECOND_CONDITION_MAX_BOXES) * SECOND_CONDITION_UNITY_PRICE;
    } else {
        price = FIRST_CONDTION_MAX_BOXES * FIRST_CONDITION_UNITY_PRICE + (SECOND_CONDITION_MAX_BOXES - FIRST_CONDTION_MAX_BOXES) * SECOND_CONDITION_UNITY_PRICE + (boxes - SECOND_CONDITION_MAX_BOXES) * THIRD_CONDITION_MIN_BOXES;
    }

    return price;
}


// RESPOSTA
// Minha abordagem a essa questão criar uma função onde qualquer condição de quantidade de caixas vendidas pode ser facilmente alterada, sem a necessidade de alterar a lógica da função.
// Isso é possível pois a função é reutilizável, ou seja, as condições podem ser alteradas em um arquivo .env, por exemplo, e a função continuará funcionando normalmente independente da quantidade de caixas e valores.