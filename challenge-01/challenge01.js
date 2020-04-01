var myvar;

myvar = 10;

var soma = 15 + 8;

soma += 1;

soma *= 3;

// soma = 72

var souninja = true;

var comida = ['arroz', 'feijão' , 'ovo'];

console.log(comida[1]);
//feijão

console.log(soma === comida);
//false

console.log(myvar <= soma);
//true

function divisao(n1, n2) {
    var isNumber = typeof(n1, n2) == "number";
    
    if(isNumber) 
        return n1 / n2;
    else
        return 'Invalid';
    }

console.log(divisao(10, 2));
//5


