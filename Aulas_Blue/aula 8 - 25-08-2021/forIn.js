let carro = {modelo: "A3 sedan", marca: "Audi", ano: 2022} //dicionario

for (let caracteristica in carro) {
    console.log(caracteristica + ": " + carro[caracteristica]);
   //console.log(caracteristica[modelo]);
    
}


let filmes = {Genero: "Terror", Titulo: "IT", Classificação: 18}
for (let dados in filmes) {
    console.log(dados + ": " + filmes[dados]);
}
