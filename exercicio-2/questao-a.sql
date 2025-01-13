--QUESTÃO A) Escreva comandos SQL completos para criar as tabelas acima (Atenção: Somente
--os comandos em SQL soltos aqui, sem nenhuma função para isto, nem ORMs). Certifique-se de
--incluir as relações e as restrições necessárias para representar o cenário descrito no requisito.
--(1 PONTO)

CREATE TABLE Produto (
  codigo INT PRIMARY KEY,
  nome VARCHAR(20) NOT NULL UNIQUE,
  valor DECIMAL(*, 2) NOT NULL
);

CREATE TABLE ProdutoDesconto (
  codigo INT NOT NULL,
  quantidade INT NOT NULL,
  valor DECIMAL(*, 2) NOT NULL,
  PRIMARY KEY (codigo, quantidade),
  FOREIGN KEY (codigo) REFERENCES Produto(codigo) ON DELETE CASCADE
);

--Resposta:
--