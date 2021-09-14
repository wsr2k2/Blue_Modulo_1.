
//Lutador ágil
const prompt = require("prompt-sync")();
let inimigo,jogadaPlayer,jogadaInimigo,euMorri,inimigoMorreu,proximaFase,grupoContador=0,a=0
//Funções
const rolarDado = function(){
    dado=[1,2,3,4,5,6];
    valorDado=dado[Math.floor(Math.random()*dado.length)];
    return
}
const sorteioOpcoes = function(){
    opcoes=[1,2,3];
    escolhaSorteada=opcoes[Math.floor(Math.random()*opcoes.length)];
}
const setInimigos =function(){
    let listaNomes =['leo','rafa'];
    nomeInimigo=listaNomes[Math.floor(Math.random()*listaNomes.length)];
    let inimigo0a = new Inimigo(nomeInimigo,5,10,5,100,1,0,'Lutador Agil',3,eu.xp),
 inimigo1a= new Inimigo(nomeInimigo,4,11,7,110,1,1,'Lutador Agil',3,eu.xp),
 inimigo2a= new Inimigo(nomeInimigo,4,12,7,121,1,2,'Lutador Agil',3,eu.xp),
 inimigo3a= new Inimigo(nomeInimigo,4,13,7,133,1,3,'Lutador Agil',3,eu.xp),
 inimigo4a= new Inimigo(nomeInimigo,4,14,7,146,1,4,'Lutador Agil',3,eu.xp),
 inimigo5a= new Inimigo(nomeInimigo,5,15,9,160,1,5,'Lutador Agil',3,eu.xp),
 inimigo6a= new Inimigo(nomeInimigo,5,16,9,175,1,6,'Lutador Agil',3,eu.xp),
 tipoANivel=[inimigo0a,inimigo1a,inimigo2a,inimigo3a,inimigo4a,inimigo5a,inimigo6a];
 //Lutador Pesado
 let inimigo0b = new Inimigo(nomeInimigo,5,10,5,100,1,0,'Lutador Pesado',2,eu.xp),
 inimigo1b= new Inimigo(nomeInimigo,7,11,4,110,1,1,'Lutador Pesado',2,eu.xp),
 inimigo2b= new Inimigo(nomeInimigo,7,12,4,121,1,2,'Lutador Pesado',2,eu.xp),
 inimigo3b= new Inimigo(nomeInimigo,7,13,4,133,1,3,'Lutador Pesado',2,eu.xp),
 inimigo4b= new Inimigo(nomeInimigo,7,14,4,146,1,4,'Lutador Pesado',2,eu.xp),
 inimigo5b= new Inimigo(nomeInimigo,9,15,5,160,1,5,'Lutador Pesado',2,eu.xp),
 inimigo6b= new Inimigo(nomeInimigo,9,16,5,175,1,6,'Lutador Pesado',2,eu.xp),
 tipoBNivel= [inimigo0b,inimigo1b,inimigo2b,inimigo3b,inimigo4b,inimigo5b,inimigo6b]
//LutadorPrecavido
let inimigo0c = new Inimigo(nomeInimigo,5,10,5,100,2,0,'Lutador Agil',1,eu.xp),
 inimigo1c= new Inimigo(nomeInimigo,5,11,5,125,2,1,'Lutador Agil',1,eu.xp),
 inimigo2c= new Inimigo(nomeInimigo,5,12,5,136,2,2,'Lutador Agil',1,eu.xp),
 inimigo3c= new Inimigo(nomeInimigo,5,13,5,148,2,3,'Lutador Agil',1,eu.xp),
 inimigo4c= new Inimigo(nomeInimigo,5,14,5,161,2,4,'Lutador Agil',1,eu.xp),
 inimigo5c= new Inimigo(nomeInimigo,7,15,7,175,2,5,'Lutador Agil',1,eu.xp),
 inimigo6c= new Inimigo(nomeInimigo,7,16,7,190,2,6,'Lutador Agil',1,eu.xp),
 tipoCNivel= [inimigo0c,inimigo1c,inimigo2c,inimigo3c,inimigo4c,inimigo5c,inimigo6c]
    sorteioOpcoes();
 if(escolhaSorteada==1){
     inimigo=tipoANivel[eu.nivel]
     return console.log(inimigo)
 }else if(escolhaSorteada==2){
     inimigo=tipoBNivel[eu.nivel]
     return console.log(inimigo)
 }else if(escolhaSorteada==3){
     inimigo=tipoCNivel[eu.nivel]
     return console.log(inimigo)
 }
    return console.log(inimigo)
}
const ataquePlayer = function(){
    if(inimigoMorreu==false){
    do{
    jogadaPlayer=0
    console.log('\n1 - Ataque Básico\n2 - Ataque Especial\n3 - Poção');
    let escolhaAtaque = prompt('Você escolhe qual ataque?');
    if(escolhaAtaque == 1){
        jogadaPlayer++
        inimigo.hp = inimigo.hp - eu.dano
        console.log(`Seu dano foi: ${eu.dano}`)
        console.log(`O HP de ${inimigo.name} agora é: ${inimigo.hp}`);
    }else if(escolhaAtaque==2){
        jogadaPlayer++
        rolarDado()
        if(valorDado<=2){
            console.log('\nVocê errou o ataque')
        }else{
            rolarDado()
            dano1=valorDado*eu.forcaExtra/10
            rolarDado()
            dano2=valorDado*eu.velocidade/10
            danoTotal=eu.dano+dano1+dano2
            inimigo.hp = inimigo.hp-danoTotal
            console.log(`\nSeu dano foi: ${danoTotal}`)
            console.log(`O HP de ${inimigo.name} agora é: ${inimigo.hp}`);  
        }
    }else if(escolhaAtaque==3){
        if(eu.quantidadeItens!=0){
            jogadaPlayer++
            eu.quantidadeItens--
            eu.hp=eu.hp*1.2
            console.log(`Seu novo HP é ${eu.hp}`)
        }else if(eu.quantidadeItens==0){
            console.log('Poção indisponível. Tente novamente...')
        }
    }else{
        console.log('Escolha inválida. Tente novamente...')
    }
}while(jogadaPlayer == 0)
if(inimigo.hp<=0){
    console.log('Você derrotou seu inimigo')
    inimigoMorreu = true;
    proximaFase=true;
    }
}
return
}
const turnoInimigo=function(){
    if (euMorri==false){
    do{
        jogadaInimigo=0
        sorteioOpcoes()
        if(escolhaSorteada == 1){
            console.log(`\nVocê foi atingido por um ataque básico`)
            jogadaInimigo++
            eu.hp = eu.hp - inimigo.dano
            console.log(`Seu dano foi: ${inimigo.dano}`)
            console.log(`O HP de ${eu.name} agora é: ${eu.hp}`);
        }else if(escolhaSorteada==2){
            jogadaInimigo++
            rolarDado()
            if(valorDado<=2){
                console.log(`${inimigo.name} errou o ataque`)
            }else{
                rolarDado()
                dano1=valorDado*inimigo.forcaExtra/10
                rolarDado()
                dano2=valorDado*inimigo.velocidade/10
                danoTotal=inimigo.dano+dano1+dano2
                eu.hp = eu.hp-danoTotal
                console.log(`O dano foi: ${danoTotal}`)
                console.log(`O HP de ${eu.name} agora é: ${eu.hp}`);  
            }
        }else if(escolhaSorteada==3){
            if(eu.quantidadeItens>0){
                jogadaInimigo++
                inimigo.quantidadeItens--
                inimigo.hp=inimigo.hp*1.2
                console.log(`${inimigo.name} usou uma poção`)
                console.log(`Seu novo HP é ${inimigo.hp}`)
            }else{}
        }    
    }while(jogadaInimigo == 0)
    if(eu.hp<=0){
        console.log('Você morreu')
        euMorri = true;
        proximaFase = false;
    }
}
    return
}
const batalha = function(){
    euMorri=false;
    inimigoMorreu=false;
    do{
        if(euMorri===false){
            ataquePlayer()
            console.log('\n'+eu.hp+'\n')
        }
        if(inimigoMorreu===false){
            turnoInimigo()
            console.log('\n'+inimigo.hp+'\n')
        }
    }while(euMorri !=true && inimigoMorreu !=true)
    if(euMorri==true){
        console.log('Você foi derrotado')
    }else if(inimigoMorreu==true){
        console.log('Você ganhou a batalha')
    }
}
//Criação de classe para personagem
class Personagem {
    constructor(name,forcaExtra,dano,velocidade,hp,quantidadeItens,nivel,xp) {
    this.name = name;
    this.forcaExtra = forcaExtra;
    this.dano = dano;
    this.velocidade = velocidade;
    this.hp = hp;
    this.quantidadeItens = quantidadeItens;
    this.nivel = nivel;
    this.xp=xp;
    }
    controleXP(){}
    subirNivel(){}
}
class Inimigo extends Personagem {
    super(name,forcaExtra,dano,velocidade,hp,quantidadeItens,nivel,status,vulnerabilidade,xp){
        this.name = name;
        this.forcaExtra = forcaExtra;
        this.dano = dano;
        this.velocidade = velocidade;
        this.hp = hp;
        this.quantidadeItens = quantidadeItens;
        this.nivel = nivel;
        this.status = status;
        this.vulnerabilidade = vulnerabilidade;
        this.xp=xp;
    }
    controleXP(){}
    subirNivel(){}
}

//Criação de ambientes
class Ambiente {
    constructor(name,periculosidade,topografia,danoAleatório){
        this.name=name;
        this.periculosidade=periculosidade;
        this.topografia= topografia;
        this.danoAleatório=danoAleatório;
    }
    rolarDado(){}
    danoNaRodada(){}
    danoVulnerabilidade(){}
}
class Torneio{
    constructor (tipo,premio,titulo,venceu){
        this.tipo=tipo;
        this.premio=premio;
        this.titulo=titulo;
        this.venceu=venceu;
    }
    quartasFinal(){
        console.log('\n=====QUARTAS DE FINAL======')
        batalha()
    }
    semiFinal(){
        if(proximaFase===true){
            console.log('\n======SEMI-FINAL======')
            batalha()
        }
    }
    final(){ 
        if(proximaFase===true){
            console.log('\n======GRANDE FINAL======')
            batalha()
        }
        if(proximaFase===false){
            console.log('Você perdeu o torneio')
        }
    }
}
class Regional extends Torneio{
    super (tipo,premio,titulo,venceu){
        this.tipo=tipo;
        this.premio=premio;
        this.titulo=titulo;
        this.venceu=venceu;
    }
    faseGrupos(){
        console.log('=======INÍCIO DO TORNEIO======')
        console.log('\n=====FASE DE GRUPOS=======')
        console.log('PRIMEIRA BATALHA')
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        console.log('SEGUNDA BATALHA')
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        console.log('TERCEIRA BATALHA')
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        proximaFase = false;
        if(grupoContador==1){ 
            proximaFase = true;
        }
    }
    quartasFinal(){
        console.log('\n=====QUARTAS DE FINAL======')
        batalha()
    }
    semiFinal(){
        if(proximaFase===true){
            console.log('\n======SEMI-FINAL======')
            batalha()
        }
    }
    final(){ 
        if(proximaFase===true){
            console.log('\n======GRANDE FINAL======')
            batalha()
        }
        if(proximaFase===false){
            console.log('Você perdeu o torneio')
        }
    }
}
class Mundial extends Torneio{
    super (tipo,premio,titulo,venceu){
        this.tipo=tipo;
        this.premio=premio;
        this.titulo=titulo;
        this.venceu=venceu;
    }
    faseGrupos(){
        console.log('=======INÍCIO DO TORNEIO======')
        console.log('\n=====FASE DE GRUPOS=======')
        console.log('PRIMEIRA BATALHA')
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        console.log('SEGUNDA BATALHA')
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        console.log('TERCEIRA BATALHA')
        batalha();
        if(proximaFase===true){
            grupoContador++
        }
        proximaFase = false;
        if(grupoContador==1){ 
            proximaFase = true;
        }
    }
    oitavasFinal(){
        console.log("\n======== OITAVAS DE FINAL ==========");
        batalha();
    }
    quartasFinal(){
        if(proximaFase===true){
        console.log('\n=====QUARTAS DE FINAL======')
        batalha();
        }
    }
    semiFinal(){
        if(proximaFase===true){
            console.log('\n======SEMI-FINAL======')
            batalha()
        }
    }
    final(){ 
        if(proximaFase===true){
            console.log('\n======GRANDE FINAL======')
            batalha()
        }
        if(proximaFase===false){
            console.log('Você perdeu o torneio')
        }
    }
}

let nome = prompt('Qual é o seu nome?')
let eu = new Personagem(nome,5,10,5,100,1,0,1)
//console.log(eu)
setInimigos()
//console.log(inimigo.hp)
//ataquePlayer()
//console.log(eu.quantidadeItens)
//ataquePlayer()
//batalha()
let local = new Torneio(a,10000,a,false)
local.final()
let mundial= new Mundial('MUNDIAL',10000000,"Campeão mundial",false)
mundial.faseGrupos()
mundial.oitavasFinal()
mundial.quartasFinal()
mundial.semiFinal()
mundial.final()