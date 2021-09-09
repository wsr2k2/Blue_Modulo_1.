const prompt = require('prompt-sync')();

// perguntar quantas rodadas vamos disputar = OK
var partidas = +prompt("Quantas rodadas: ");

// perguntar quantos jogadores vao disputar o jogo = OK
var jogadores = +prompt("Quantos jogadores: ");

// criar um objeto para cada jogador com nome e numero tirado
var listajogadores = [];
var apostas = [];
for (let jg = 0; jg < jogadores; jg++){
    var nome = prompt("Qual o nome: ");
    var jogador = {
        nome: nome,
        dado: Math.floor(Math.random() * (7 - 1) + 1)
    }    
        listajogadores.push(jogador);
        for (let pt = 0; pt < partidas; pt++){
    
        var jogador = {
            nome: nome,
            dado: Math.floor(Math.random() * (7 - 1) + 1)
        }           
        apostas.push(jogador);
    }       
}
console.log(listajogadores);
console.log(apostas);


// função para comparar as arrays

   

// ordenar esses objetos, sabendo que o vencedor tirou o maior numero no dado.


// mostrar no final qual jogador ganhou mais rodadas e foi o grande campeao




