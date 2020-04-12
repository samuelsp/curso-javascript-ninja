/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [true, 42, 'ninja', NaN, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function fnArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(fnArray(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function fnArrayIndex(array, index) {
    if ( index !== undefined )
        return array[index];
    return array;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = ['wife', 8, false, 12.34, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(fnArrayIndex(arr, 0));
console.log(fnArrayIndex(arr, 1));
console.log(fnArrayIndex(arr, 2));
console.log(fnArrayIndex(arr, 3));
console.log(fnArrayIndex(arr, 4));
console.log(fnArrayIndex(arr));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
    var books = 
        {

            'Quando Nietzsche Chorou':
            {
                quantidadePaginas: 230,
                autor: "Irvin D. Yalom",
                editora: "Ediouro"
            },

            'Memórias Do Subsolo':
            {
                quantidadePaginas: 500,
                autor: "Fiodor Dostoiévski",
                editora: "editora34"
            },
         
            'O Mundo De Sofia':
            {
                quantidadePaginas: 124,
                autor: "Jostein Gaarder",
                editora: "SEGUINTE"
            }     
        }    

    if ( !!bookName )
        return books[bookName];

    return books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Quando Nietzsche Chorou';
console.log("O livro", bookName,"tem", book(bookName).quantidadePaginas, "páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = 'O Mundo De Sofia';
console.log("O autor do livro", bookName, "é", book(bookName).autor + ".")
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'Memórias Do Subsolo';
console.log("O livro", bookName, "foi publicado pela editora", book(bookName).editora +".");

// ?
