// const prompt = require('prompt-sync')();
// Tarefa 01: Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto, 
// cada objeto precisa ter os seguintes atributos: - 
// Nome - 
// Duração - 
// Ano - 
// Diretor - 
// atoreses principais(lista) - 
// Dados (função anônima que retorna uma string com os dados do filme) 
// No final mostra no console os dados de todos os filmes ao mesmo tempo


let filme1 = {
    nome: "Invocação do mal",
    duração: "1h e 52",
    ano: "2013",
    diretor: "James Wan",
    atores: ["Vera Farmiga", " Patrick Wilson"],   
    dados: function() {
        return `O primeiro filme é: ${this.nome}, tem duração de ${this.duração} minutos, foi lançado em ${this.ano}, \no diretor é: ${this.diretor} e os atoreses principais são: ${this.atores}.`
    }
}
console.log();
    console.log(filme1.dados());

    console.log();

let filme2 = {
    nome: "Hellraiser - Renascido do Inferno",
    duração: "1h e 34",
    ano: "1987",
    diretor: "Clive Barker",
    atores: ["Doug Bradley", " Ashley Laurence"],
    dados: function() {
        return `O segundo filme é: ${this.nome}, tem duração de ${this.duração} minutos, foi lançado em ${this.ano}, \no diretor é: ${this.diretor} e os atoreses principais são: ${this.atores}.`
    }
}
    console.log(filme2.dados());
    console.log();

let filme3 = {
    nome: "A hora do pesadelo",
    duração: "1h e 31",
    ano: "1984",
    diretor: "Wes Craven",
    atores: ["Robert Englund", " Heather Langenkam"],
    dados: function() {
        return `O terceiro filme é: ${this.nome}, tem duração de ${this.duração} minutos, foi lançado em ${this.ano}, \no diretor é: ${this.diretor} e os atoreses principais são: ${this.atores}.`
    }
}
    console.log(filme3.dados());
    console.log();

let filme4 = {
    nome: "O Exterminador do futuro",
    duração: "1h e 47",
    ano: "1984",
    diretor: "James Cameron",
    atores: ["Arnold Schwarzegger", " Linda Hamilton"],
    dados: function() {
        return `O quarto filme é: ${this.nome}, tem duração de ${this.duração} minutos, foi lançado em ${this.ano}, \no diretor é: ${this.diretor} e os atoreses principais são: ${this.atores}.`
    }
}
    console.log(filme4.dados());
    console.log();

let filme5 = {
    nome: "Um sonho de liberdade",
    duração: "2h e 22",
    ano: "1995",
    diretor: "Frank Darabont",
    atores: ["Morgan Freeman", " Tim Robbins"],
    dados: function() {
        return `O quinto filme é: ${this.nome}, tem duração de ${this.duração} minutos, foi lançado em ${this.ano}, \no diretor é: ${this.diretor} e os atoreses principais são: ${this.atores}.`
    }
}
    console.log(filme5.dados());
    console.log();
    console.log("lista com os filmes")
    console.log();


var catalogo = [filme1, filme2, filme3, filme4, filme5];



for (let i of catalogo) {
    console.log(i.dados())
    console.log();
    
}