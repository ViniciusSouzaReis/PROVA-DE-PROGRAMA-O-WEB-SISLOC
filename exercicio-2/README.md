EXERCÍCIO 2 – ACRESCENTANDO BANCO DE DADOS
Informação: Dado o problema do exercício 1 e procurando uma forma mais flexível para o
usuário, o analista de requisitos elaborou o seguinte:

REQUISITO: Cálculo de preço por lote: O preço por lote de um produto é definido no campo
“valor” da tabela Produto. O valor diminui à medida que a quantidade de produtos comprados
aumenta, sendo aplicado apenas à quantidade que atinge cada faixa. O preço total da compra
deve ser calculado considerando todas as faixas de quantidade.

Por exemplo, para a compra de 25 unidades de um produto com preço inicial de R$ 30,00:

  • De 1 a 10 unidades, preço de R$ 30,00.
  • De 11 a 20 unidades, preço de R$ 25,00.
  • Acima de 20 unidades, preço de R$ 20,00.

Logo: 10 x 30,00 + 10 x 25,00 + 5 x 20,00 = R$ 725,00.

Para atender essa regra, foi ajustado o requisito “Manter dados do Produto” para suportar a
tabela com valores progressivos por lote. O banco de dados foi inicialmente definido conforme
o diagrama:

TABELA PRODUTO

  • Campos/Descrição:
  o codigo: Código do produto (chave primária).
  o nome: Nome do produto (não pode se repetir no sistema) (tamanho 20)
  o valor: Preço inicial do produto (até a próxima faixa).

TABELA PRODUTODESCONTO

  • Campos/Descrição:
  o codigo: Código do produto (chave primária e estrangeira da tabela Produto).
  o quantidade: Quantidade a partir da qual o preço muda (exclusivo por codigo).
  o valor: Preço aplicado a partir dessa quantidade.