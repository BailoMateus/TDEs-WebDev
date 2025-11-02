# Documentação - TDE 1: Funções em JavaScript

## Objetivo
O objetivo deste trabalho é compreender e aplicar **funções em JavaScript**, explorando parâmetros, retorno de valores e reutilização de código. O projeto também demonstra o uso de **funções nomeadas**, **funções anônimas**, **arrow functions** e **callbacks**.

---

## Estrutura do Código
O código foi desenvolvido dentro de um arquivo HTML com JavaScript embutido, exibindo os resultados no console do navegador.

### 1. Funções Matemáticas Básicas
Foram criadas quatro funções nomeadas para operações matemáticas simples:
- **soma(a, b)** → retorna a soma de dois números.  
- **subtracao(a, b)** → retorna a diferença entre dois números.  
- **multiplicacao(a, b)** → retorna o produto entre dois números.  
- **divisao(a, b)** → realiza a divisão, tratando o erro de divisão por zero com uma mensagem de alerta.

Essas funções evidenciam o uso de **parâmetros** e **retorno de valores**, promovendo reutilização de código.

---

### 2. Manipulação de Arrays
Foi implementada uma função anônima armazenada em uma constante:
- **calcularMedia(array)** → percorre o array somando seus elementos e retorna a média aritmética.

---

### 3. Uso de Arrow Functions
Duas arrow functions foram utilizadas:
- **filtrarPares(array)** → retorna apenas os números pares do array usando o método `filter()`.
- **dobrarValores(array)** → retorna um novo array com todos os valores dobrados usando o método `map()`.

Essas funções ilustram o uso conciso das **arrow functions** e a aplicação de **métodos de array** em JavaScript moderno.

---

### 4. Função com Callback
A função **aplicarOperacao(array, callback)** demonstra o conceito de **funções como parâmetros** (callback):
- Recebe um array e uma função de operação (exemplo: `dobrarValores`).
- Executa a função passada como argumento sobre o array.

---

### 5. Execução e Testes
O código define um array `numeros = [2, 3, 4, 5, 6]` e exibe no console os resultados das operações.  
Foram realizados testes com todas as funções, mostrando o comportamento esperado de soma, subtração, multiplicação, divisão, filtragem e cálculo da média.

---

## Conclusão
O exercício reforça o uso prático de **funções nomeadas, anônimas e arrow functions**, além de demonstrar o conceito de **callbacks** e **reutilização de código modular** em JavaScript.
