// Objetivo: calcular a média de notas de um aluno e exibir sua situação (Aprovado/Reprovado/Recuperação)
// O aluno estará aprovado se obter nota >= 7
// Estará em recuperação se a nota for entre 5 e 6.9
// Estará reprovado se a nota for menor que 5

function calcularMedia(notas) {
  let soma = 0; // corrigido: declarada variável com let
  for (let i = 0; i < notas.length; i++) { // corrigido: i < notas.length
    soma += notas[i];
  }
  let media = soma / notas.length; // corrigido: declarada variável com let
  return media;
}

function verificarSituacao(media) {
  let situacao; // corrigido: variável declarada
  if (media >= 7) { // corrigido: incluir nota 7 como aprovado
    situacao = "Aprovado";
  } else if (media < 5) {
    situacao = "Reprovado";
  } else {
    situacao = "Recuperação";
  }
  return situacao;
}

let notasAluno = [8, 6, 7];
let mediaFinal = calcularMedia(notasAluno);
console.log("Média final: " + mediaFinal.toFixed(2));
console.log("Situação do aluno: " + verificarSituacao(mediaFinal));
