/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

let numeros = [10, 20, 30, 40];


let adicionarElemento = (arrayElementos, elemento) => {
  arrayElementos.push(elemento)
  return arrayElementos;
}

let removerUltimoElemento = (arrayElementos) => {
  elementoRemovido = arrayElementos.pop();
  return elementoRemovido;
}

let removerElementosIntervalo = (arrayElementos, inicio, fim) => {
  arrayElementos.splice(inicio-1, fim);
  return arrayElementos
}

console.log(numeros)
adicionarElemento(numeros, 50)
adicionarElemento(numeros, 60)
console.log(numeros)

console.log(removerUltimoElemento(numeros))
console.log(numeros)

removerElementosIntervalo(numeros, 3, 5)
console.log(numeros)
