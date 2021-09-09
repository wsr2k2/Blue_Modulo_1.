const prompt = require('prompt-sync')();

// perguntar quantas rodadas vamos disputar = OK
var partidas = +prompt("Digite quantas partidas você quer jogar: ")


// perguntar quantos jogadores vao disputar o jogo = OK
var jogadores = +prompt("Digite quantos jogadroes vão jogar: ")


// criar um objeto para cada jogador com nome e numero tirado
var listajogadores = [];
for (let i = 0; i < jogadores; i++) {
    jogador = prompt("Digite o nome: ")
    listajogadores.push(jogador);
}
        
    console.log(listajogadores)

// função para comparar as arrays


    // guardar todos os objetos em uma lista

var aposta1 = [];
for (let i = 0; i < partidas; i++) {
    apostajg1 = Math.floor(Math.random() * (6 - 1) + 1) 
    aposta1.push(apostajg1);
}
        
    console.log("numero sorteado jogador 1 " + aposta1)

    var aposta2 = [];
    for (let i = 0; i < partidas; i++) {
        apostajg2 = Math.floor(Math.random() * (7 - 1) + 1) 
        aposta2.push(apostajg2);
    
    }
        console.log("numero sorteado jogador 2 " + aposta2)
            
        
       for (let i = 0; i < partidas; i++)
        if (aposta1[i] > aposta2[i]){
            console.log(`O jogador jao ganhou`);
        } else if (aposta1[i] < aposta2[i]) {
            console.log(`O jogador maria ganhou`);
        } else {
            console.log("deu empate");
        }


// ordenar esses objetos, sabendo que o vencedor tirou o maior numero no dado.






// mostrar no final qual jogador ganhou mais rodadas e foi o grande campeao


    // Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
// for (let i = 0; i < jogadores; i++) {
//     let jogador = {
//         nome: prompt("Digite o nome: ")
//         dado: 

//     }
//     console.log(jogador.nome)

// }

