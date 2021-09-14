const prompt = require("prompt-sync")();

console.log("==========================");
console.log("       O ESTÁGIARIO       ");
console.log("==========================");

console.log("A sua jornada começa em uma segunda-feira chuvosa na cidade de São Paulo. Você sempre se levanta às 7h para se aprontar para o trabalho.\nSó que hoje ao despertar seu smartphone você estava muito cansado e resolve??? \033[1;33m\nLevantar imediatamente = 1 ou Ficar mais 5 minutinhos deitado = 2 ....\033[0m")

let escolha1 = parseInt(prompt("Digite 1 ou 2: "));
function levantar(escolha1){  
    if (escolha1 == 1){
        return "Você escolheu levantar!"
    } else {
        return "Você escolheu ficar deitado mais 5 minutinhos!"
    }
}
console.log(levantar(escolha1))

function levantou(escolha1){
    if (escolha1 == 1){
        return "Então borá lá enfrentar mais um dia de tramapo!"
    }
else {
        return "Você acordou atrasado, agora bora correr contra o tempo, chegar atrasado vai ser zuado!"
}   
}
console.log(levantou(escolha1));

// AQUI É A SEQUENCIA DA PRIMEIRA ESOLHA == 1
console.log();
if (escolha1 == 1){
    console.log("Chegando no trampo, seu líder vem logo com um monte de trampo para você fazer, mas como sempre a maoria, ele mesmo quem devia estar realizando, mas aqui você é o ESTAGIÁRIO")
}
// AQUI É A SEQUENCIA DA SEGUNDA ESCOLHA == 1
if (escolha1 == 1){
    console.log("Ele te passa um monte de trampo, mas você queria tomar um café com os colegas antes de começar a fazer suas tarefas, o que você decide?????  \n\n1 = fazer o trampo agora ou 2 = tomar café?");
    var escolha2 = parseInt(prompt("Digite 1 ou 2: "))
}
// AQUI É A SEQUENCIA DA TERCEIRA ESCOLHA == 1
if (escolha2 == 1){
    console.log("Escolhendo fazer o trampo, você vai para a sua mesa e começa a fazer tudo que te passaram, e é trampo pra caramba, quando percebe já são 13:45h e decide ir almoçar...")
}

console.log("Enquanto você almoça, chegam uns colegas seus e começam a conversar, perdem a noção do tempo... \nEnquanto conversam, na mesa do lado um assunto te chama a atenção, estão falando de uma vaga em outro setor da empresa, mas para participar teria de comparecer até as 14:00h, e já são 14:58h.....\nE do nada quem aparece????? Seu líder querendo te matar porque você ainda não retornou do almoço e mandando você voltar iemdiatamente pro seu setor.....\n\nVocê fica pensando na vaga que ouviu e tem que decidir correr o risco ou não de tentar essa vaga, ou, continuar se sujeitando ao que aceitou até hoje.... 1 = Você aceita sua vidinha ou 2 = Corre o risco....")
let escolha3 = parseInt(prompt("Digite 1 ou 2: "));

if (escolha3 == 1){
    console.log("Você decidiu ser um perdedor, um acomodado, um pau mandado, então volte para sua mesa e vá trabalhar!!!!!\n\n\n\n\n\n\n\n\Chega a hora de ir embora e você se sente um completo inútil, mas pensa que é melhor ter um emprego do que arriscar e ficar desempregado.... AMANHÃ TUDO DE NOVOOOOOOOOO")
}
// AQUI É A SEQUENCIA DA PRIMEIRA ESOLHA == 2
if (escolha1 == 2){
    console.log("Você chegou 35 minutos atrasado e seu líder já ta louco atrás de você pra te falar um monte de asneiras");
}
// AQUI É A SEQUENCIA DA SEGUNDA ESCOLHA == 2
if (escolha1 == 2){
    console.log("Seu líder acaba de encontrar, com a cara de quem tá puto da vida, porque ele está sendo cobrado pelo líder dele de um trampo que você ia fazer para ele, então se prepare para ouvir um monte. \nApós um monte de blábláblá, você queria mesmo é tomar um café de boa antes dos serviços, \n\no que decide: 1 = café ou 2 = trampo? ");
    var escolha2 = parseInt(prompt("Digite 1 ou 2: "))
}

if (escolha2 == 2){
    console.log("Escolhendo fazer o trampo, você vai para a sua mesa e começa a fazer tudo que te passaram, e é trampo pra caramba, quando percebe já são 14:45h e decide ir almoçar...")
    console.log("\n\nEnquanto você almoça, na mesa do lado um assunto te chama a atenção, estão falando de uma vaga em outro setor da empresa, mas para participar teria de comparecer até as 14:00h, e já são 14:58h.....\nEntão você larga tudo e sai correndo para onde é a tal vaga, corre Forrest, corre....tentar o seu futuro\n\n\n\n  Chega lá quase sem folego e pergunta sobre a vaga na recepção, e ouve da atendente.... Nossa deu sorte viu? O entrevistador e o líder que ia acompanhar, se atrasaram e por isso ainda pode se candidatar para a vaga\n\nQuando são 16hs eles chegam e entram, você será uns dos últimos, então se prepare para esperrrrrrr");
} 

    console.log("Você acaba pensando: Meu se eu ficar aqui todo esse tempo e não der em nada, posso ficar meu trampo e isso ia ser muito pior, meu Deus, o que eu faço?\n 1 = Voltar para sua mesa ou 2 = Ficar e arriscar?......");
    let escolha4 = parseInt(prompt("Digite 1 ou 2: "));

    if (escolha4 == 1){
        console.log("Chegando no seu setor, seu líder começa te falando um monte, dizendo coisas que não valiam a pena ficar ouvindo, mas você fica mesmo assim por medo, após ele falar um monte de asneiras, te manda para casa e diz só para voltar na próxima semana. Vc pega e vai embora mais triste ainda, pois, não sabe se ele irá te demitir ou se vai piorar o tratamento, mas fica mais triste mesmo por não ter arriscado uma nova opostunidade. Fim do seu dia!!! Moral da história, às vezes temos algumas chances na vida, são dados sinais para seguir em frente e conquistar o que é nosso, mas decidimos abrir mão por medo, insegurança, falta de preparo, entre muitas outras coisas");
    }
    if (escolha4 == 2){
        console.log("Após ficar horas lá esperando para ser chamado, seu líder passa por você e vem tirar satisfação, 'A era aqui que você estava enrolando até agora?? Deixa de fazer o que eu mando para vir aqui tentar uma vaga e me deixar na mão??? Primeiro que essa vaga não é para vc não! Você não tem competência para ela!', então o líder que ia te entrevistar sai da sala e corta logo o seu líder, e o manda embora, ele sai resmungando mas vai embora.....\n\n\nNisso você entra na sala para o teste/entrevista.... \n\nApós mais de 1h vc sai de lá CONTRATADO!!! Seu novo líder deu a você a chance de crescer e mostrar ao seu antigo líder que você pode e será um excelente profissional.Começa no dia seguinte no novo setor");
    }