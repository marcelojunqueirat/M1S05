/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

let corEmIngles = 'green';
let corEmPortugues = '';

switch (corEmIngles) {
  case 'yellow':
    corEmPortugues = 'amarelo';
    break;
  case 'black':
    corEmPortugues = 'preto';
    break;
  case 'blue':
    corEmPortugues = 'azul';
    break;
  case 'red':
    corEmPortugues = 'vermelho';
    break;
  case 'green':
    corEmPortugues = 'verde';
    break;
  case 'brown':
    corEmPortugues = 'marrom';
    break;

  default:
    corEmPortugues = 'inexistente em nosso banco de dados';
    break;
}

console.log("A tradução da cor '" + corEmIngles + "' para português é '" + corEmPortugues + "'.");
