const prompt = require('prompt-sync')();

var partidas = +prompt("Quantas rodadas: ");
var jogadores = +prompt("Quantos jogadores: ");
var listajogadores = [];

for (let i = 0; i < partidas; i++){
    for (let i=0; i < jogadores; i++) {
        var nome = prompt("Qual o nome: ");
    var jogador = {
        nome: nome,
        dado: Math.floor(Math.random() * (7 - 1) + 1)
    }
}
    // var nome = prompt("Qual o nome: ");
    // var jogador = {
    //     nome: nome,
        
    // } 
   
    //     listajogadores.push(jogador);
    //     for (let pt = 0; pt < partidas; pt++){
    
    //     var jogador = {
    //     dado: Math.floor(Math.random() * (7 - 1) + 1)
    //     }
           
        listajogadores.push(jogador);

    }       

console.log(listajogadores);
listajogadores.sort((a, b) => {
    if (a.dado < b.dado) {
        return-1
    } else {
        return true;
    }


});