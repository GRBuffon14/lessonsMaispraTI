// Exercicio 1: par ou impar

const prompt = require(`prompt-sync`)();
// let number = parseInt(prompt("digite um número: "));

// const parImpar = number % 2 === 0 ? "O número é par" : "O número é impar";

// console.log(parImpar);

////////////////////////////////////////////////////////////////////
// Exercicio 2: Maior de dois números.

// let numero1 = parseInt(prompt("digite um número: "))
// let numero2 = parseInt(prompt("digite um número: "))

// if(numero1 > numero2){
//   console.log("O primeiro numero é maior");
// }else if(numero1 < numero2){
//   console.log("O segundo numero é maior");
// }else{
//   console.log("Os números são iguais");
// }

// const numeroMaior = numero1 > numero2 ? "O primeiro numero é maior" : numero1 < numero2 ? "O segundo numero é maior" : "Os números são iguais";
// console.log(numeroMaior);

////////////////////////////////////////////////////////////////////
// Exercicio 3: Triangulo.

// let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
// let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
// let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//   console.log("É possível formar um triângulo com essas medidas.");
// }else{
//   console.log("Não é possível forma un triangulo");
// }

////////////////////////////////////////////////////////////////////
// Exercicio 4: Calculadora.

// let numero1 = parseInt(prompt("digite um número: "));
// let numero2 = parseInt(prompt("digite um número: "));
// let operacao = prompt("Insira uma das operações + - * / ");
// let resultado;

// if(operacao === '+'){
// resultado = numero1 + numero2;
// }else if(operacao === '-'){
//   resultado = numero1 - numero2;
// }else if(operacao === '*'){
//   resultado = numero1 * numero2;
// }else if(operacao === '/'){
//   if(numero2 !== 0){
//     resultado = numero1 / numero2;
//   }else{
//     console.log("Erro: divisão por zero");
//   }
// }else{
//   console.log("Operação inválida");
// }
// if(resultado !== undefined){
//   console.log(`Resultado: ${resultado}`);

////////////////////////////////////////////////////////////////////
//Switch Case

// let dia = parseInt(prompt("Insira um dia da semana: "));
// let nomeDoDIa;

// switch(dia){
//   case 1:
//     nomeDoDIa = "Domingo";
//     break;
//   case 2:
//     nomeDoDIa = "Segunda";
//     break;
//   case 3:
//     nomeDoDIa = "Terça";
//     break;
//   case 4:
//     nomeDoDIa = "Quarta";
//     break;
//   case 5:
//     nomeDoDIa = "Quinta";
//     break;
//   case 6:
//     nomeDoDIa = "Sexta";
//     break;
//   case 7:
//     nomeDoDIa = "Sábado";
//     break;
//   default:
//     console.log("Dia invalido");
//     break;
// }
// if(nomeDoDIa !== undefined){
//   console.log("o dia é: ", nomeDoDIa);
// }

////////////////////////////////////////////////////////////////////
//Switch Case

// let mes = parseInt(prompt("Insira um mes do ano (1 a 12): "));
// let diaDoMes;

// switch(dia){
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     diaDoMes = 31;
//     break
//   case 4: case 6: case 9: case 11:
//       diaDoMes = 30;
//       break
//   case 2:
//     diaDoMes = 28;
//     break;
//   default:
//     diaDoMes = -1;
//     break;
// }
// if(nomeDoDIa !== -1){
//   console.log(`O mês`);
// }

////////////////////////////////////////////////////////////////////
// Exercicio 4: Calculadora em SWITCH CASE

// let numero1 = parseInt(prompt("digite um número: "));
// let numero2 = parseInt(prompt("digite um número: "));
// let operacao = prompt("Insira uma das operações + - * / ");
// let resultado;

// switch(operacao){
//   case '+':
//     resultado = numero1 + numero2;
//     break;
//   case '-':
//     resultado = numero1 - numero2;
//     break;
//   case '*':
//     resultado = numero1 * numero2;
//     break;
//   case '/':
//     if(numero2 !== 0){
//       resultado = numero1 / numero2;
//     }else{
//       console.log("Erro: divisão por zero");
//     }
//     break;
//     default:
//       console.log("Operação inválida");
//       break;
// }

// if(resultado !== undefined){
//   console.log(`Resultado: ${resultado}`);
// }

////////////////////////////////////////////////////////////////////
// Estrutura de repetição
// let contador;
// let multiplicando;
// for (multiplicando = 1; multiplicando <= 10; multiplicando++) {
//   console.log("");
//   for (contador = 0; contador <= 10; contador++) {
//     console.log(`${multiplicando} * ${contador} = ${multiplicando * contador}`);
//   }
// }

// numeros pares
// for(let i = 0; i <= 100; i+=2){
//   console.log(i);
// }

// soma de 0 a 10
// let soma = 0;
// for(let i = 0; i <= 10; i++){
//   soma += i
// }
// console.log(soma);

////////////////////////////////////////////////////////////////////
// Exercicio 5: decrementar de 10 até 0
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }


////////////////////////////////////////////////////////////////////
// WHILE

// let i = 10;

// while(i >= 1){
//   console.log(i);
//   i--;
// }

////////////////////////////////////////////////////////////////////
// Exercicio 6: múltiplos de 5 até 100

// let i = 5;
// while(i <= 100){
//   console.log(i);
//   i+=5;
// }

////////////////////////////////////////////////////////////////////
// Exercicio 7: somar até 1000
// let soma = 0;
// let i = 0;

// while(i <= 1000){
//   soma += i
//   i++;
// }
// console.log(soma);


////////////////////////////////////////////////////////////////////
// DO WHILE

let senha;

do{
  senha = prompt("Digite a senha: ")
}while(senha !== "1234")

console.log("Senha Correta!");

////////////////////////////////////////////////////////////////////
// Pedir para adivinhar o numero de 1 e 10

// const numeroCorreto = Math.floor((Math.random() * 10) + 1);
// console.log(numeroCorreto);
// let tentativa;

// do{
// tentativa = parseInt(prompt("Adivinhe o número inteiro entre 1 e 10 "));
// if(tentativa < numeroCorreto){
//   console.log("Tente um número maior");
// }else if(tentativa > numeroCorreto){
//   console.log("Tente um numero menor");
// }
// }while(tentativa !== numeroCorreto)
// console.log("Parabéns!");