/*Faça um programa que leia nome e média de um aluno, guardando também a
situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média
para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso
contrário é reprovado.*/

const prompt = require('prompt-sync')();

var nome = prompt("Digite o nome do aluno: ");
var nota = +prompt("Digita a média do aluno: ");

if (nota >= 7){
    situacao = "APROVADO";
} else if (nota < 5) {
    situacao = "REPROVADO";
} else {
    situacao = "RECUPERAÇÃO";
}
  
var aluno = {
    nome: nome,
    nota: nota,
    situacao: situacao,
    resultado: function() {
        return `O(a) aluno(a) ${this.nome} ficou média ${this.nota}, o resultado final dele(a) é ${situacao}  `
    }
}
console.log(aluno.resultado());