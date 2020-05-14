(function() {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    
    var person = {
        name: 'Samuel',
        lastname: 'Cunha',
        age: 38
    }

    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys( person ));
    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push( {name: 'You Don’t Know JS' , pages: 100 } );
    books.push( {name: 'JavaScript: The Definitive Guide', pages: 1000 } );
    books.push( {name: 'JavaScript: The Good Parts', pages: 175} );

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop());

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books = JSON.stringify(books);

    // for(book in books) {
    //     books[book] = JSON.stringify(books[book]);
    // }
    console.log( '\nLivros em formato string:' );


    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);
    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books);

    console.log( '\nAgora os livros são objetos novamente:' );
    console.log(books);
    console.log();

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    var properties;
    
    for(book in books) {
        properties = Object.getOwnPropertyNames(books[book]);
        for(var prop in properties) {
            console.log(`"${properties[prop]} : ${books[book][properties[prop]]}"`)
        }
    }


    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log( '\nMeu nome é:' );
    var myName = ['S', 'a', 'm', 'u', 'e', 'l'];

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );
    
    var inverseName = myName.reverse();
    console.log(inverseName.join(''));

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
})();