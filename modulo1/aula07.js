//Array ou Vetor

// let listaCompras = Array();

// listaCompras[0] = "Shampoo";
// listaCompras[1] = "Condicionador";
// listaCompras[2] = true;
// listaCompras['x'] = 100;

// console.log(listaCompras);

// let listaFrutas = ['Banana', 'Morango'];

// console.log(listaFrutas);

// let listaViagem = Array('Passagens', 'Malas');

// console.log(listaViagem);

//Array multidimensionais ou Matriz

// let listaCoisas = [];

// listaCoisas['Frutas'] = [];
// listaCoisas['Frutas'][0] = 'Morango';
// listaCoisas['Frutas'][1] = 'Uva';
// listaCoisas['Frutas'][2] = 'Laranja';
// listaCoisas['Frutas'][3] = 'Bergamota';

// listaCoisas['Viagem'] = [];
// listaCoisas['Viagem'][0] = 'Passagens';
// listaCoisas['Viagem'][1] = 'Malas';

// console.log(listaCoisas);

// //Inserção de elementos no final do Array
// listaCoisas['Frutas'].push('Banana', 'Laranja');
// console.log(listaCoisas);

// //Inserção de elementos no começo do Array
// listaCoisas['Frutas'].unshift('Limão');
// console.log(listaCoisas);

// //Exclusão de elementos no final do Array
// listaCoisas['Frutas'].pop();
// console.log(listaCoisas);

// //Exclusão de elementos no começo do Array
// listaCoisas['Frutas'].shift();
// console.log(listaCoisas);

// let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água');

// let aux = listaProdutos.indexOf('Computador');

// if(aux === -1){
//   console.log('Elementos não existe no array');
// }else{
//   console.log('Elemento existe e está na posição ' + aux);
// }

// console.log(listaProdutos.sort());

// let listaProdutos = Array(1, 3, 4, 5);

// console.log(listaProdutos.sort());

//Funções

// function calcularAreaTerreno(largura, comprimento){
//   let area = largura * comprimento;
//   return area
// }

// const prompt = require(`prompt-sync`)();

// let lg = prompt("Digite a largura do terreno em metros: ");
// let cp = prompt("Digite a comprimento do terreno em metros: ");

// //Chamada de função
// let resultado = calcularAreaTerreno(lg, cp)
// console.log(`O terreno possui ${resultado} metros quadrados`);

// let exibirFuncao = function(){
//   console.log('Olá');
// }

// exibirFuncao();

// function exibirFuncao(callbackSucesso, callbackErro){
//   if(true){
//     callbackSucesso('Funções de callback em caso de sucesso')
//   }else{
//     callbackErro('Função de callback em caso de erro');
//   }

// }

// let callbackSucesso = function(titulo){
//   console.log(titulo);
// }

// let callbackErro = function(erro){
//   console.log(erro);
// }

// exibirFuncao(callbackSucesso, callbackErro);

let soma = function (num1, num2) {
  return num1 + num2;
};
let subtracao = function (num1, num2) {
  return num1 - num2;
};
let multiplicacao = function (num1, num2) {
  return num1 * num2;
};
let divisao = function (num1, num2) {
  return num1 / num2;
};

function calculadora(
  operacao,
  num1,
  num2,
  soma,
  subtracao,
  multiplicacao,
  divisao
) {
  switch (operacao) {
    case "+":
      return soma(num1, num2);
    case "-":
      return subtracao(num1, num2);
    case "*":
      return multiplicacao(num1, num2);
    case "/":
      return divisao(num1, num2);
  }
}


console.log(calculadora("+", 10, 10, soma, subtracao, multiplicacao, divisao));
console.log(calculadora("-", 10, 10, soma, subtracao, multiplicacao, divisao));
console.log(calculadora("*", 10, 10, soma, subtracao, multiplicacao, divisao));
console.log(calculadora("/", 10, 10, soma, subtracao, multiplicacao, divisao));