//Exercitando Arrays e funções

//Exercício 1: Somar todos os elementos de um array

// let elementos = [1, 2, 3, 4];
// let array = [10, 20, 150, 200];
// function somaElementos(vetor) {
//   let soma = 0;
//   for (let i = 0; i < vetor.length; i++) {
//     soma += vetor[i];
//   }
//   return soma;
// }

// console.log("A soma dos elementos é: ", somaElementos(elementos));
// console.log("A soma dos elementos é: ", somaElementos(array));

//////////////////////////////////////////////////////////////////////////////////////
//Exercício 2: Encontrar o maior número em um Array

// let elementos = [1, 2, 3, 4,10,85,98,1,2,3];
// function maiorNumero(vetor) {
//   let maior = vetor[0];
//   for (let i = 1; i < vetor.length; i++) {
//     maior = maior < vetor[i] ? vetor[i] : maior;
//   }

//   return maior
// }

// console.log("A soma dos elementos é: ", maiorNumero(elementos));

//////////////////////////////////////////////////////////////////////////////////////
//Exercício 3: Reverter um array
// let elementos = [1, 2, 3, 4,10,85,98,1,2,3];

// function reverterArray(vetor){
//   let newArray = [];
//   for(let i = vetor.length-1; i >= 0; i--){
//     newArray.push(vetor[i])
//   }
//   return newArray;
// }
// console.log("O vetor invertido é: ", reverterArray(elementos));

//////////////////////////////////////////////////////////////////////////////////////
//Exercício 1: Somar todos os elementos de uma matriz
// let elementos = [[1, 2, 3, 4],[1, 2, 3, 4],[1, 2, 3, 4],[1, 2, 3, 4]];
// function somaMatriz(matriz){
//   let soma = 0;
//   for(let i = 0; i < matriz.length; i++ ){
//     for(let j = 0; j < matriz[i].length; j++){
//       soma += matriz[i][j]
//     }
//   }
//   return soma;
// }
// console.log("A soma da matriz é: ", somaMatriz(elementos));

//////////////////////////////////////////////////////////////////////////////////////
//Exercício 2: Encontrar o maior número em uma matriz

// let elementos = [[1, 2, 3, 4],[5, 8, 9, 4],[10, 2, 33, 4],[15, 22, 31, 4]];
// function maiorNumeroMatriz(matriz) {
//   let maior = matriz[0][0];
//   for (let i = 1; i < matriz.length; i++) {
//     for(let j = 1; j < matriz[i].length; j++){
//       maior = maior < matriz[i][j] ? matriz[i][j] : maior;
//     }
//   }

//   return maior
// }

// console.log("O maior número da matriz é: ", maiorNumeroMatriz(elementos));

//////////////////////////////////////////////////////////////////////////////////////
//Funções avançadas: String

/*
  String é considerado um valor primitivo, porém, ao ser interpretada pelo JS os converte em objetos,
  possuindo propriedades e métodos.
*/

// let nome = 'Gustavo';
// console.log(nome.indexOf('a'));

// let nome = 'Dick Vigarista';
// console.log(nome);
// let nomeAlterado = nome.replace('Dick Vigarista', 'Pica-Pau')
// console.log(nomeAlterado);

// let nome = 'Dick Vigarista';
// console.log(nome.substr('7', '5'));

// let nome = 'Dick Vigarista';
// console.log(nome.toLocaleUpperCase());

// let nome = 'BATMAN';
// console.log(nome.toLowerCase());

// let nome = ' BATMAN ';
// console.log('-' + nome.trim() + '-');

//////////////////////////////////////////////////////////////////////////////////////
//Funções avançadas: Matemáticas

// let x = Math.ceil(10.1);
// console.log(x);

// let x = Math.floor(10.1);
// console.log(x);

// let x = Math.round(10.1);
// let y = Math.round(10.6);
// console.log(x,y);

// let x = Math.random();
// console.log(x);

//////////////////////////////////////////////////////////////////////////////////////
//Funções avançadas: Data

// let data = new Date();
// let data1 = new Date();

// console.log(data.getDate());
// console.log(data.getMonth()+1);
// console.log(data.getFullYear());
// console.log(`${data.getDate()}/${data.getMonth()+1 < 10 ? `0${data.getMonth()+1}` : data.getMonth()+1}/${data.getFullYear()}`);

// console.log(data.toString());
// data.setDate(data.getDate() + 720)
// console.log(data.toString());

// data = Number(data1.getTime() - 165162);
// data1 = Number(data1.getTime() - 5515615);
// console.log(data, data1);

// let milisegundosEntreDatas = Math.abs(data - data1)
// console.log(milisegundosEntreDatas);