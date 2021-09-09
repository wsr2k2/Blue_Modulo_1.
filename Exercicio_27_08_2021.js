 //crie uma lista com x numeros. Utilizando WHILE e INDEX retorne a posição e o conteudo da lista

 // criar uma lista qq com numeros 
 const numeros = [17, 05, 1991, 27, 08, 22];

// index = 0 quer dizer que vai começar pelo primeiro numero
 let index = 0;

 // enquanto tiver conteudo na lista retornar valor e posição

 while (index < numeros.length) {
    // index retorna a posição, nome da lista[index] retorna o conteudo
    console.log(index, numeros[index])
    index++
    
 }
