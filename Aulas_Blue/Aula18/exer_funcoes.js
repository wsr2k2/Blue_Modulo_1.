const prompt = require("prompt-sync")();
/*Exercício para praticar funções
Nome: Joguinho: Salão
Objetivo: Escrever uma função que funciona como um jogo, em que a pessoa digitar as suas escolhas e o programa irá indicar o resultado das escolhas.
Dificuldade: Intermediário

Crie uma função principal chamada jogo() e execute as tarefas abaixo:
1 - A pessoa irá entrar em um salão (informe isso a ele utilizando o comando console.log())
2 - Você deve perguntar se ela quer escolher entre a porta esquerda ou a direita
3 - Se a resposta for "esquerda" ou "e", exiba a mensagem:
- Você entrou na sala à esquerda, parece que não tem nada por aqui. Acho melhor você voltar correndo!
4 - Caso contrário, se a resposta for "direita" ou "d", exiba a mensagem:
- Excelente escolha! A sala à direita estava te esperando esse tempo todo! Que maravilhoso isso. Pena que não tem nada aqui para você. :(
5 - Caso contrário, se a resposta não foi nenhum dos valores anteriores, exiba a mensagem abaixo e execute a função 'jogo()' novamente.
- Você não escolheu nenhuma das portas. Tente novamente.
*/

function jogo() {
  console.log(
    "\033[1;33m========================================================================"
  );
  console.log("                    BEM VINDO AO JOGO - O SALÃO");
  console.log(
    "========================================================================"
  );
  console.log(
    "\033[1;37mVocê acaba de entrar em um salão desconhecido, onde tudo pode acontecer!"
  );
  console.log(
    "À sua frente existem duas portas, escolha uma delas e prepare-se para o desconhecido. Qual porta você irá escolher?"
  );
  let escolha = prompt("\033[1;34m Direita ou Esquerda? ");
  if (
    escolha.toUpperCase() == "Esquerda".toUpperCase() ||
    escolha.toUpperCase() == "e".toUpperCase()
  ) {
    return console.log(
      `Você entrou na sala à ESQUERDA, parece que não tem nada por aqui. Acho melhor você voltar correndo!`
    );
  } else if (
    escolha.toUpperCase() == "Direita".toUpperCase() ||
    escolha.toUpperCase() == "d".toUpperCase()
  ) {
    return console.log(
      "Excelente escolha! A sala à DIREITA estava te esperando esse tempo todo! Que maravilhoso isso. Pena que não tem nada aqui para você."
    );
  } else {
    return console.log(
      "Você não escolheu nenhuma das portas. Tente novamente."
    );
  }
}

jogo();
