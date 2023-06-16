/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

let numero = 20;
let divisor = 2;
let quantidadeDivisores = 0;

let validaSeNaoEhPrimo = (numero, divisor) => {
  if (numero != 1 && numero != divisor) {
    if (numero % divisor === 0) {
      return true;
    }
  }
  return false;
}

do {
  if(validaSeNaoEhPrimo(numero, divisor)){
    quantidadeDivisores++;
  }
  divisor++
} while (divisor < numero);

if(quantidadeDivisores > 0) {
  console.log(`Seu número não é primo. Ele possui ${quantidadeDivisores+2} divisores.`)
} else if (quantidadeDivisores === 0 && numero != 1) {
  console.log("Seu número é primo.");
} else {
  console.log("Seu número é o numero 1. Ele tem apenas 1 divisor")
}

