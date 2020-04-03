var obj = { };

var pessoa = {
    nome: "Samuel",
    sobrenome: "Pereira",
    sexo: "masculino",
    idade: 38,
    peso: 92.0,
    altura: 1.72,
    andando: false,
    caminhouQuantosMetros: 0
}

pessoa.fazerAniversario = function() { pessoa.idade++ };

pessoa.andar = function(metros) {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
 };
 
 pessoa.parar = function() { pessoa.andando = false };

 pessoa.nomeCompleto = function() {
     return "Olá meu nome é " + `${pessoa.nome}` + " " + `${pessoa.sobrenome}` + "!";
 };

 pessoa.mostrarIdade = function() {
     return "Olá eu tenho " + `${pessoa.idade}` + " anos!";
 }

 pessoa.mostrarPeso = function() {
     return "Eu peso " + `${pessoa.peso}` + "Kg.";
 }

 pessoa.mostrarAltura = function() {
     return "Minha altura é " + `${pessoa.altura}` + "m."
 }

 pessoa.apresentacao = function() {
     var artigo = pessoa.sexo.toLocaleLowerCase() === 'feminino' ? " eu sou a " : " eu sou o "; 
     var anos = pessoa.idade >= 1 ? " anos" : " ano";
     var metros = pessoa.caminhouQuantosMetros >= 1 ? " metros" : " metro";

     return "Olá," + `${artigo}` + `${pessoa.nome}` + " " + `${pessoa.sobrenome}` + 
        ", tenho " + `${pessoa.idade}` + anos + ", " + `${pessoa.altura}` +
        "m, meu peso é " + `${pessoa.peso}` + "kg e, só hoje, eu já caminhei " +
        `${pessoa.caminhouQuantosMetros}` + metros + "!";

 }

console.log(pessoa.nomeCompleto()); // Olá meu nome é Samuel Pereira!
console.log(pessoa.mostrarIdade()); // Olá eu tenho 38 anos!
console.log(pessoa.mostrarPeso()); // Eu peso 92Kg.
console.log(pessoa.mostrarAltura()); // Minha altura é 1.72m.

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

console.log(pessoa.mostrarIdade()); // Olá eu tenho 41 anos!

pessoa.andar(1);
pessoa.andar(3);
pessoa.andar(5);

console.log(pessoa.andando); // true

pessoa.parar();

console.log(pessoa.andando); // false

console.log(pessoa.caminhouQuantosMetros); // 9

console.log(pessoa.apresentacao());

