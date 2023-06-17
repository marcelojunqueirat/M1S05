/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let valorTotalTodosOsProdutos = 0;

let produtos = [
  { nome: "Processador I9", preco: 2150.59 },
  { nome: "Mesa", preco: 486.87 },
  { nome: "Monitor", preco: 887.98 },
  { nome: "Mouse", preco: 220.58 },
  { nome: "Teclado", preco: 349.79 }
];

for (let index = 0; index < produtos.length; index++) {
  let produto = produtos[index];
  console.log(`Produto: ${produto.nome} | Preço: ${produto.preco}.`)
  valorTotalTodosOsProdutos += produto.preco
}

console.log(`Quantidade total de produtos: ${produtos.length}. Valor total de todos os produtos: ${valorTotalTodosOsProdutos}`)
