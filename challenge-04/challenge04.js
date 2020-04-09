var isTruthy = function(boolean) {
    return !!boolean;
}

//all falsy
console.log(isTruthy(undefined));
console.log(isTruthy(""));
console.log(isTruthy(''));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(null));
console.log(isTruthy(NaN));
console.log(isTruthy(false));

//10 truty
console.log(isTruthy(true));
console.log(isTruthy(+1));
console.log(isTruthy('verdadeiro'));
console.log(isTruthy(42.00));
console.log(isTruthy('a' === 'a'));
console.log(isTruthy(!false));
console.log(isTruthy(!!true));
console.log(isTruthy(1 >= 0));
console.log(isTruthy(!!'D'));
console.log(isTruthy('@'));

var carro = {
    marca: "BMW",
    modelo: "320i",
    placa: "MVC3923",
    ano: 2019,
    cor: "azul",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0 
}

carro.mudarCor = function(cor) { carro.cor = cor };
carro.obterCor = function() { return carro.cor };
carro.obterModelo = function() { return carro.modelo };
carro.obterMarca = function() { return carro.marca };
carro.obterMarcaModelo = function() { 
    return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
 };

carro.retirarPassageiro = function(passageiros) {
    carro.assentos = 5;

    if( passageiros > carro.assentos ) {
        console.log("Só é possível retirar 5 pessoas");
    }
    
    if( passageiros <= carro.assentos ) {
        carro.quantidadePessoas -= passageiros;
        carro.assentos -= carro.quantidadePessoas; 
    }
    else
        carro.assentos = 0;
     
    return "Assentos disponíveis: " +  carro.assentos + " - Quantidade de pessoas: " + carro.quantidadePessoas;
}

carro.adicionarPassageiro = function(passageiros) {     
    var pessoas;
    var assentos = 5;

    if( carro.assentos < passageiros && carro.assentos > 0 ) {
        pessoas = carro.assentos > 1 ? "pessoas" : "pessoa";
        return "Só cabem mais " + carro.assentos + " " + pessoas;
    }
    
    if( carro.assentos >= passageiros && carro.quantidadePessoas < assentos ) {
        if( carro.quantidadePessoas < assentos ) {
            carro.quantidadePessoas += passageiros;    
        }
        carro.assentos = assentos - carro.quantidadePessoas;
        pessoas = carro.quantidadePessoas > 1 ? 'pessoas' : 'pessoa';
    }

    if( carro.assentos == 0 ) {
        return "O carro já está lotado!";
    }    
    
    return "Já temos " + carro.quantidadePessoas + " " + pessoas + " no carro!";
      
 }

console.log(carro.obterCor());
console.log(carro.mudarCor("vermelho"));
console.log(carro.obterCor());
console.log(carro.mudarCor("verde musgo"));
console.log(carro.obterCor());
console.log(carro.obterMarcaModelo());
console.log(carro.adicionarPassageiro(2));
console.log(carro.adicionarPassageiro(4));
console.log(carro.adicionarPassageiro(3));
console.log(carro.retirarPassageiro(4));
console.log(carro.adicionarPassageiro(10));
console.log(carro.quantidadePessoas);


