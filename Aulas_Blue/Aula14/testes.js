const prompt = require('prompt-sync')();


var rodadas = +prompt("Quantas rodadas: ");
var num_jog = +prompt("Qunatos jogadores: ");
var lista_jog = [];

for (let j = 0; j < num_jog; j++) {
    var nome = prompt("Digite o nome:");
    let jogador = {
        nome: nome,
        num: Math.floor(Math.random() *6)+1,
    }
    lista_jog.push(jogador);
}
console.log(lista_jog);
