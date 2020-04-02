function add(x, y) { return x + y };

var res = add(2, 7) + 5;

//O valor atualizado da variável res é 14

var myVar;

function adicionaDois() {
    myVar = 2;
    return `O valor da variável agora é ${myVar}`;
}

//O retorno da função será NaN se for utilizado operação de
//soma a variável sem valor e number se for realizada nova atribuição
//de um number

function invalid() {
    return "Preencha todos os valores corretamente!"; 
}

function validationArgs(arg1, arg2, arg3) 
{
    if ( arg1 === undefined || 
         arg2 === undefined || 
         arg3 === undefined ) 
         return invalid();    
    return (arg1 * arg2 * arg3) + 2;
}

validationArgs(2, 3);
//Preencha todos os valores corretamente!

validationArgs(2, 3, 3);
//20

function verificaArgs(...args) {
    var len = args.length;
    
    if ( args.some(x => typeof(x) != "number") )
        return null;

    if ( len == 0 ) 
        return false;

    if ( len == 1 ) 
        return args[0];

    if ( len == 2 ) 
        return args[0] + args[1];

    if ( len == 3 )
        return args[0] + args[1] + args[2];   
}

console.log(verificaArgs(2)); //2
console.log(verificaArgs(2, 40)); //42
console.log(verificaArgs(2, 8, 2)); //12
console.log(verificaArgs());  //false
console.log(verificaArgs('a'));  //null