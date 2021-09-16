const prompt = require("prompt-sync")();


const nome = prompt("\033[1;33mDigite o seu nome: \033[0m")
console.log("\033[1;35m\nDaqui pra frente você será lembrado como: " + nome + " - A(O) ESTÁGIARIA(O)\033[0m");
console.log();
console.log("\033[1;36m============================================================================================");
console.log("                                         O ESTÁGIARIO                                       ");
console.log("============================================================================================\033[0m");

console.log("\nA sua jornada começa em uma segunda-feira chuvosa na cidade de São Paulo. \nVocê sempre se levanta às 7h para se aprontar para o trabalho.\nSó que hoje ao despertar seu smartphone você estava muito cansado e resolve????" )
function jogo(){
while(true){
    console.log("\033[1;33m\n1 = LEVANTAR  / 2 = DEITADO \033[0m")
    let escolha1 = parseInt(prompt("\033[1;32mEscolha [1] ou [2]: \033[0m"));
    // ESCOLHA LEVANTAR
    if (escolha1 == 1){
        console.log("Escolheu levantar....Então borá lá enfrentar mais um dia de tramapo!")
    // ESCOLHA DORMIR MAIS
    }if (escolha1 == 2){
        console.log("Escolheu dormir mais 5 minutinhos....Você acordou atrasado, agora bora correr contra o tempo, chegar atrasado vai ser zuado!")
    }
    
    if (escolha1 == 1){
       console.log("Chegando no trampo, seu líder vem logo com um monte de trampo para você fazer, mas como sempre, a maoria ele mesmo quem devia estar realizando, mas aqui você é o ESTAGIÁRIO")
    }
    if (escolha1 == 2){
        console.log("Você levanta atrasado e sai correndo para o trampo, já imaginando que vai ouvir um monte....Ao chegar lá seu líder te xinga um monte e te passa uma porrada de coisas...")
    }

    console.log("\nSeus colegas te chamam para tomar um café, o que você decide?")
    console.log("\033[1;33m1 = CAFÉ / 2 = TRABALHO: \033[0m")

    let escolha2 = parseInt(prompt("Escolha [1] ou [2]: "));
    if (escolha2 == 1){
        console.log("Durante o café vocês combinam de sair a noite para umas brejas.... Pretendem sair no horário normal, às 18:00H... logo depois você volta para seu setor.")
    }
    if (escolha2 == 2){
        console.log("Você escolhe ficar trabalhando e perde a chance de descontrair com os colegas......")
    }

    console.log("\nSeu líder pede para você fazer hora extra hoje, para você 'AJUDAR(FAZER)' um serviço com ele.")
    console.log("\033[1;33m1 = ACEITA / 2 = RECUSA: \033[0m");

    let escolha4 = parseInt(prompt("Escolha [1] ou [2]: "));
    if (escolha4 == 1){
        console.log("\nVocê aceita, e quando são 18:00h seus colegas aprecem para te chamar e ficam sabendo \nque você mais uma vez vai ser o trouxa do setor e ficar até mais tarde.")
        console.log("\nEles saem, com certeza vão se divertir muito e você não..... \nDe repente seu líder chega e te avisa que está indo embora, e te deixa sozinho para trampar pra ele..... \n\033[1;31mO ESTAGIOTÁRIO mais uma vez passado para trás...\033[0m")
    }
    if (escolha4 == 2){
        console.log("\nVocê recusa, ele fica puto, e você finalmente toma coragem e fala um monte para ele, diz tudo que sempre quiz dizer...")
        console.log("\nApós falar tudo que tinha para dizer, ele fica sem reação, gaguejando, e nisso toca seu ramal, \nvocê atende nervoso 'QUM É?'")
        console.log("\nE para sua felicidade era do setor onde você havia feito teste para uma vaga e PASSSOUUUUUUUU, \nao desligar o telefone, você pega todos os papéis de sua mesa e joga em cima do seu antigo \nlíder e sai todo feliz que se livrou desse verme.")
    }
    


    if ((escolha = 1))
    break;
}
}
jogo();