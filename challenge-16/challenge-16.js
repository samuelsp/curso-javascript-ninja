(function(){
    'use strict';
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    console.log( 'As letras do seu nome:' );
    var name = 'Samuel';
    for(var i = 0; i < name.length; i++) {
        console.log(name.charAt(i) + ' é a ' + (i + 1) + 'ª letra do meu nome.');
    }
    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    var fullName = 'samuel-silva-pereira-da-cunha';
    
    console.log( '\nNome convertido à partir de um slug:' );
    console.log(fullName);
    
    var fullNameFiltered = fullName.split('-').map(function(word) {
        //return word.charAt(0).toUpperCase() + word.substring(1);
        return word[0].toUpperCase() + word.slice(1);
    });

    // var fullNameFiltered = fullName.split('-');
    // for(var j = 0; j < fullNameFiltered.length; j++) {
    //     fullNameFiltered[j] = fullNameFiltered[j].charAt(0).toUpperCase() + fullNameFiltered[j].slice(1);
    // }
    console.log(fullNameFiltered.join(' '));

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    var nomes = ['João', 'Maria', 'Lucas', 'Paulo', 'Tiago'];
    var frase = nomes.join(', ');
    frase = frase.substring(0, frase.lastIndexOf(',')) + frase.substring(frase.lastIndexOf(',')).replace(',', ' e');
    frase += ' são meus amigos.';
    console.log( '\nMeus amigos:' );
    console.log(frase);

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log( '\nEra "Roberto", agora é:' );
    var nome = 'Roberto';
    nome = nome.slice(0, nome.lastIndexOf('o')) + nome.slice(nome.lastIndexOf('o')).replace('o', 'a');
    console.log(nome);

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    var professor = 'Fernando';
    console.log(professor.substring(professor.length, 3));
    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    var myName = 'Fernando';
    var myNewName = '';
    for (let index = 0; index < myName.length; index++) {        
        myNewName += (index % 2 == 0) ? myName[index].toUpperCase() : myName[index].toLowerCase(); 
    }
    console.log(myNewName);

})();