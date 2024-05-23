// const professor = {
//   nome: "Tony Stark",
//   materia: "Matemática",
//   notas: {
//     aluno1: 3.5,
//     aluno2: 4.0,
//     aluno3: 2.8,
//   },
// };

// /*
//     For in para iterar sobre as propriedades dentro das notas,
//     calcule a média e imprima se o aluno está ou não aprovado.
// */

// let media = 0;
// let contador = 0;
// for (aluno in professor.notas) {
//   // console.log(professor.notas[chave]);
//   media += professor.notas[aluno];
//   contador++;
// }

// media /= contador;
// // console.log(`O aluno ${media < 6 ? 'não foi aprovado' : 'foi aprovado'}`);
// console.log(`A média da turma é: ${media.toFixed(2)}
// ${
//   media >= 3
//     ? `\nA turma do professor ${professor.nome} está acima da média de aprovação`
//     : `\nA turma do professor ${professor.nome} não está acima da média de aprovação`
// }`);

///////////////////////////////////////////////////////////////////////////////////////////////////

// const biblioteca = [
//   { titulo: "12 regras para vida", autor: "Jordan Peterson", ano: 1925 },
//   { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937 },
//   { titulo: "Senhora do jogo", autor: "Sidney Sheldon", ano: 2009 },
//   { titulo: "Zé Carioca", autor: "Disney", ano: 1940 },
//   { titulo: "Nação Dopamina", autor: "Anna Lembke", ano: 2021 },
// ];

/*
    Use um loop for of para iterar sobre o array biblioteca.
    Para cada livro, verifique se foi publicado antes de 2000.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

// console.log("Os livros publicados antes de 2000 são:");
// for (livro of biblioteca) {
//   if (livro.ano < 2000) {
//     console.log(`O livro ${livro.titulo} que foi publicado em ${livro.ano} escrito por ${livro.autor}`);
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// const filmes = [
//   { titulo: "Tropa de Elite", genero: "Ação" },
//   { titulo: "Capitão Fantástico", genero: "Drama" },
//   { titulo: "O poderoso Chefão", genero: "Crime" },
//   { titulo: "Clube da Luta", genero: "Drama" },
//   { titulo: "Oppenheimer", genero: "Biografia" },
//   { titulo: "High School Musical", genero: "Musical" },
//   { titulo: "Barbie", genero: "Live Action" },
// ];

/*
    Use o método forEach para iterar sobre o array filmes.
    Crie um objeto para armazenar a contagem de filmes por gênero.
    Para cada filme no array, verifique se o gênero já existe no objeto de contagem. Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
    Após o loop, imprima cada gênero e o número de filmes correspondente.
*/

// MINHA SOLUÇÃO
// const generoFilme = {};
// const generos = [];
// filmes.forEach((index) => {
//   generoFilme[index.genero] = 0;
//   generos.push(index.genero);
// })
// for(chave in generoFilme){
//   for(chave2 of generos){
//     if(chave == chave2){
//       generoFilme[chave] +=1
//     }
//   }
//   console.log(`Existem ${generoFilme[chave]} filmes do gênero ${chave}`);
// }
// console.log('\n////////////////////////////////////');
// console.log(generoFilme);

//SOLUÇÃO DO PROFESSOR
// let contagemGeneros = {};

// filmes.forEach(filme => {
//     if (contagemGeneros[filme.genero]) {
//         contagemGeneros[filme.genero]++;
//     } else {
//         contagemGeneros[filme.genero] = 1;
//     }
// });

// for (let genero in contagemGeneros) {
//     console.log(`Existem ${contagemGeneros[genero]} filmes no gênero ${genero}.`);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// PESQUISA BINÁRIA

/**
 * Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa
 * binária para encontrar o valor certo.
 */

// const binarySearch = (list, item) => {
//   let low = 0;
//   let high = list.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const guess = list[mid];

//     if (guess === item) {
//       return mid;
//     } else if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return null;
// };

// const myList = [1, 3, 5, 7, 9];
// const myList2 = [1, 3, 5, 7, 9, 10, 15, 22, 25, 34, 55, 89];

// console.log(binarySearch(myList, 3)); // 1
// console.log(binarySearch(myList2, 55)); // 1
// console.log(binarySearch(myList, -1)); // null

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Recursos e operadores novos*/

/*
    Spread = espalhar
    Rest = juntar

    Oq define se o operador é spread ou rest é o contexto em q está sendo utilizado, caso espalhe estruturas de dados é spread, caso junte, é rest.

//     No contexto spread:
// */

// let tituloArtigo = 'A new approach to convert rice husk waste in a quick and efficient adsorbent to remove cationic dye from water'

// //Pode-se espalhar os caracteres da string com spread

// console.log(tituloArtigo)
// console.log(...tituloArtigo)

// /*
//     Espalha a string dentro de um array de forma q cada um dos caracteres ocupe um índice
// */

// console.log([...tituloArtigo])

// //Pode-se espalhar arrays em outros arrays
// let listaCursos1 = ['Lógica de Programação', 'Git e Github']
// let listaCursos2 = ['ReactJs', 'Java']
// let listaCursosCompleto = ['Spring Boot', 'Bancos de Dados', ...listaCursos1, ...listaCursos2]

// console.log(listaCursosCompleto)

// //Spread no contexto de objetos

// let pessoa = { nome: 'João', idade: 15 }
// let dadosCompletos = { endereco: 'Rua teste', ...pessoa }

// console.log(dadosCompletos)


// /*
//     No contexto Rest (muito utilizado em conjunto com funções):
//     Recebe todos os parâmetros e os junta em estrutura de arrays, onde pode-se percorrer todos os índices de forma dinâmica.
 
//     na prática seria como: function soma([3, 8, 5, 7]))
// */

// function soma(...param) {
//     let resultado = 0

//     console.log(param)

//     param.forEach(v => resultado += v)

//     return resultado
// }

// console.log(soma(3, 8, 5, 7))


// /*
//     O primeiro parâmetro indicado será recebido pela função e armazenado em 'm', os demais parâmetros serão recebidos e unificados em um parâmetro array 'p'
// */

// function multiplicacao(m, ...p) {
//     console.log(m)
//     console.log(p)

//     let resultado = 0

//     p.forEach(v => resultado += m * v)

//     return resultado
// }

// console.log(multiplicacao(5, 7, 12, 3, 49))