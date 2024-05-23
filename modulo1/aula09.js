// const pessoa = {
//   nome: "Gustavo",
//   idade: 22,
//   profissao: "Desenvolvedor",
//   email: "gustavo@teste.com",
//   empregada: true,
// }
// pessoa.falar = function(){
//   return `Meu nome é: ${this.nome}`
// }
// console.log(pessoa);
// // console.log(pessoa.nome);
// // console.log(pessoa.email);

// // pessoa.nome = "Jurema";
// // console.log(pessoa.nome);
// // console.log(pessoa["nome"]);

// delete pessoa.empregada
// console.log(pessoa);
// console.log(pessoa.falar());
///////////////////////////////////////////////

// const porta = {
//   cor: "verde",
//   tamanho: 2,
//   corMassaneta: "preto",
//   portaAberta: false,
//   abrir: function(){
//     this.portaAberta = true;
//     console.log("A porta abriu");
//   },
//   fechar: function(){
//     this.portaAberta = false;
//     console.log("A porta fechou");
//   }
// }

// console.log(porta);
// console.log("A porta está aberta: ", porta.portaAberta);
// porta.abrir();
// console.log("A porta está aberta: ", porta.portaAberta);
// porta.fechar()
// console.log("A porta está aberta: ", porta.portaAberta);
//////////////////////////////////////////////////////////////////////////////////////////////

// const pessoa = {
//   nome: "Gustavo",
//   idade: 22,
//   profissao: "Desenvolvedor",
//   email: "gustavo@teste.com",
//   empregada: true,
// }

// for(let chave in pessoa){
//   console.log(chave + ":" + pessoa[chave]);
// }

// let numeros = [10,20,100]

// for(let numero of numeros ){
//   console.log(numero);
// }

// let nomes = "Gustavo Buffon";

// for(let letra of nomes){
//   console.log(letra);
// }
//////////////////////////////////////////////////////////////////////////////////////////////
/*
    VocÊ tem uma lista de objetos que representam diferentes tipos de veículos e suas características. 
    Seu objetivo é primeiro usar FOR IN para listar todas as propriedades e valores de cada veículo. Depois, 
    utilizar FOR OF para listar apenas os modelos dos veículos.
*/

// const veiculo = [
//   {
//     modelo: "sandero",
//     cor: "preto",
//     portas: 4,
//     radio: true,
//     tetoSolar: true,
//   },
//   {
//     modelo: "civic",
//     cor: "Cinza",
//     portas: 2,
//     radio: true,
//     tetoSolar: true,
//   },
//   {
//     modelo: "fusca",
//     cor: "Branco",
//     portas: 2,
//     radio: false,
//     tetoSolar: false,
//   },
// ];

// for (let chave in veiculo) {
//   console.log(veiculo[chave]);
// }
// for (let chave2 of veiculo) {
//   console.log(chave2.modelo);
// }

//////////////////////////////////////////////////////////////////////////////////////////////

//forEach
// let cores = ['Azul', 'Preto', 'Branco'];

// cores.forEach((cor, indice, array) => {
//   console.log(indice + ': ' + cor,array);
// })

//////////////////////////////////////////////////////////////////////////////////////////////

// let compras = []
// compras['frutas'] = new Array('banana', 'laranja');

// compras['frutas'].forEach((value, index, array) => {
//   console.log(index + ': ' + value,array);
// })

//////////////////////////////////////////////////////////////////////////////////////////////

/*
    Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
*/

// let numeros = [2,5,8,9,7];
// let soma = 0;

// numeros.forEach((value)=>{
//   soma += value;
//   console.log("Valor multiplicado por 2: ",value*2);
// })
// console.log("Soma de todos os valores", soma);

//////////////////////////////////////////////////////////////////////////////////////////////

// let nome = 'Gustavo';
// let idade = 22;
// let sexo = 'Masculino';

// let objeto = {
//   nome,
//   idade,
//   sexo
// }

// console.log(objeto);

//////////////////////////////////////////////////////////////////////////////////////////////

// let BicicletaFactory = function(cor,tipo,marca){
//   return {
//     cor,
//     tipo,
//     marca
//   }
// }

// let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi');
// let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'BMX');

// console.log(bicicleta1);
// console.log(bicicleta2);