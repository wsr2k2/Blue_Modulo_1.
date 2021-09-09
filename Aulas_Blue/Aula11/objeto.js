/* um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente
consistem em diversas variáveis e funções - que são chamadas de propriedades e métodos quando estão dentro de objetos.
Vamos trabalhar com um exemplo para entender como eles são)*/

let pessoa = {
    nome: "William Rodrigues",
    idade: 39,    
    genero: "Masculino",
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.genero);

// adicionar uma propriedade
pessoa.escolaridade = "Cursando graduação";

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.genero);
console.log(pessoa.escolaridade);

// excluir uma propriedade
delete pessoa.genero;

console.log(pessoa);