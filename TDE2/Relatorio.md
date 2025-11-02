# Documentação - TDE 2: Depuração e Correção de Código JavaScript
## Objetivo
Este trabalho teve como objetivo desenvolver habilidades de **depuração (debugging)**
em JavaScript, utilizando ferramentas do navegador (DevTools) e boas práticas de
identificação e correção de erros.
## Código Base
O código fornecido tinha como propósito calcular a **média das notas de um aluno** e
exibir sua **situação escolar** (Aprovado, Reprovado ou Recuperação), mas apresentava
erros lógicos e sintáticos que impediam seu funcionamento correto.
## Erros Identificados e Correções Aplicadas


### 1. Variáveis não declaradas
Erro: As variáveis `soma`, `media` e `situacao` estavam sendo usadas sem declaração.
Correção: Todas foram declaradas com `let` para evitar escopo global e garantir boas
práticas.


### 2. Estrutura do laço for
Erro: O laço usava a condição `i <= notas.length`, o que causava acesso a índice
inexistente.
Correção: Alterado para `i < notas.length`.


### 3. Condição de aprovação
Erro: A condição original aprovava apenas notas maiores que 7 (`> 7`).
Correção: Ajustada para incluir a nota 7 como aprovação (`>= 7`).


### 4. Ordem das condições lógicas
Erro: A lógica de verificação da situação estava incorreta, causando resultados errados
para algumas médias.
Correção: Reorganizadas as condições para respeitar a hierarquia correta:
- Aprovado → média ≥ 7
- Reprovado → média < 5
- Recuperação → média entre 5 e 6.9


### 5. Resultado Final
Após as correções, o código executa corretamente:
Calcula a média das notas do array `notasAluno = [8, 6, 7]`.
Exibe no console:
Média final: 7.00
Situação do aluno: Aprovado

## Ferramentas e Processo de Depuração
Durante a depuração, foram utilizadas:
- Console do navegador (F12 → Console) para verificar mensagens de erro.
- `console.log()` para inspecionar valores intermediários.
- Breakpoints (DevTools) para pausar e analisar o fluxo do programa passo a passo.
## Conclusão

O processo de debugging permitiu identificar e corrigir erros comuns de lógica e sintaxe.
O código final funciona conforme o objetivo original, reforçando a importância de boas
práticas de declaração de variáveis, controle de fluxo e uso adequado de ferramentas de
depuração no desenvolvimento JavaScript