/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let numero = 300;
let numeroAnterior = 0;
let numeroAtual = 1;

console.log(`Sequência de Fibonacci até o numero ${numero}`);
console.log(numeroAnterior);

while (numeroAtual <= numero) {
  console.log(numeroAtual);
  let proximoNumero = numeroAnterior + numeroAtual;
  numeroAnterior = numeroAtual;
  numeroAtual = proximoNumero;
}

