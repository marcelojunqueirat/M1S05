/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

let calculadora = (numero1, numero2, operacao) => {
  let resultado;
  switch (operacao) {
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '/':
      resultado = numero1 / numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;

    default:
      resultado = 'Falha ao processar operação.'
      break;
  }

  resultado = (typeof(resultado) === 'number') ? resultado.toFixed(2) : resultado;

  return resultado;
}


console.log(calculadora(105, 108, '+'));
console.log(calculadora(1005, 506, '-'));
console.log(calculadora(2000, 11, '/'));
console.log(calculadora(559.45, 3, '*'));

console.log(calculadora(559.45, 3, '*dd'));


