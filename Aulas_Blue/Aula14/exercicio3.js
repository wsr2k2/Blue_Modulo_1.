const prompt = require('prompt-sync')();
/* Crie um programa que leia nome, ano de nascimento e carteira de
trabalho e cadastre-os (com idade) em um objeto. Se por acaso a CTPS for diferente
de 0, o objeto receberá também o ano de contratação e o salário. Calcule e
acrescente , além da idade , com quantos anos a pessoa vai se aposentar. Considere
que o trabalhador deve contribuir por 35 anos para se aposentar. */

var nome = prompt("Digite o nome: ");
var nascimento = +prompt("Digite o ano de nascimento: ");
var hoje = new Date().getFullYear();
var ctps = +prompt("Digite o número da sua CTPS: ");
var idade = (hoje - nascimento)

if (ctps != 0) {
    var anocontratacao = +prompt("Digite o ano de contratação: ")
    var salario = +prompt("Digite o salário atual: ")
    var idade = (hoje - nascimento);
    var temposervico = (hoje - anocontratacao);
    var aposenta = (35 - temposervico);
    console.log();
    console.log(`${nome} tem ${idade}, foi contratado em ${anocontratacao} com o salário de R$ ${salario}, faltam ${aposenta} anos para poder se aposentar`);

} else{
    console.log();
    console.log(`${nome} tem ${idade} anos e sua ctps é ${ctps}`);
}
var funcionario = {
    nome: nome,
    nascimento: nascimento,
    ctps: ctps,
    anoContratacao: anocontratacao,
    salario: salario,
    idade: idade,
    aposentadoria: aposenta

}
