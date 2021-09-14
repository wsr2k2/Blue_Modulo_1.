const prompt = require("prompt-sync")();

console.log("==========================");
console.log("       O ESTÁGIARIO       ");
console.log("==========================");

console.log("A sua jornada começa em uma segunda-feira chuvosa na cidade de São Paulo. Você sempre se levanta às 7h para se aprontar para o trabalho.\nSó que hoje ao despertar seu smartphone você estava muito cansado e resolve??? \033[1;33m\nLevantar imediatamente = 1 ou Ficar mais 5 minutinhos deitado = 2 ....\033[0m")

let escolha1 = parseInt(prompt("Digite 1 ou 2: "))

if (escolha1 == 1){
    console.log("Levantar agora...Então borá lá enfrentar mais um dia de tramapo!\n\nChegando no trampo, seu líder vem logo com um monte de trampo para você fazer, mas como sempre a maoria, ele mesmo quem devia estar realizando, mas aqui você é o ESTAGIÁRIO")
    console.log("Ele te passa um monte de trampo, mas você queria tomar um café com os colegas antes de começar a fazer suas tarefas, o que você decide?????  \n\n1 = fazer o trampo agora ou 2 = tomar café?");
    let escolha2 = parseInt(prompt("Digite 1 ou 2: "))
    console.log("Escolhendo fazer o trampo, você vai para a sua mesa e começa a fazer tudo que te passaram, e é trampo pra caramba, quando percebe já são 13:45h e decide ir almoçar...\n\nEnquanto você almoça, chegam uns colegas seus e começam a conversar, perdem a noção do tempo... \nEnquanto conversam, na mesa do lado um assunto te chama a atenção, estão falando de uma vaga em outro setor da empresa, mas para participar teria de comparecer até as 14:00h, e já são 14:58h.....\nE do nada quem aparece????? Seu líder querendo te matar porque você ainda não retornou do almoço e mandando você voltar iemdiatamente pro seu setor.....\n\nVocê fica pensando na vaga que ouviu e tem que decidir correr o risco ou não de tentar essa vaga, ou, continuar se sujeitando ao que aceitou até hoje.... 1 = Você aceita sua vidinha ou 2 = Corre o risco....")
    console.log("Você decidiu ser um perdedor, um acomodado, um pau mandado, então volte para sua mesa e vá trabalhar!!!!!\n\nChega a hora de ir embora e você se sente um completo inútil, mas pensa que é melhor ter um emprego do que arriscar e ficar desempregado.... AMANHÃ TUDO DE NOVOOOOOOOOO");
    } else if (escolha1 == 2){
    console.log("Você escolheu ficar deitado mais 5 minutinhos!.....Você acordou atrasado, agora bora correr contra o tempo, chegar atrasado vai ser zuado!")
    console.log("Agora voce precisa escolher se 1 ou 2....");
    let escolha2 = parseInt(prompt("Digite 1 ou 2: "))
    console.log("Voce escolheu 2....")
    console.log("Agora voce precisa escolher se 1 ou 2....");
    let escolha3 = parseInt(prompt("Digite 1 ou 2: "))
    console.log("Voce escolheu 2....")
}