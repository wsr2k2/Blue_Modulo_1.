// const prompt = require('prompt-sync')();
// console.log("ola mundo!")

let lista = ["Diego", 20, "C8", "Blue"];
let aluno = {nome: "Diego", idade: 20, turma: "C8", curso: "Blue"}

console.log(lista[0]);
console.log(aluno.nome);   
console.log(aluno)


// para adicionar um item a uma lista basta colocar
// nome da lista.nome_do_item(valor_do_item)
aluno.cidade = "Curitiba"

console.log(aluno)

// para deletar um item, basta colocar 
// delete.item a ser deletado

aluno.dados = function () {
    return `O aluno ${this.nome} tem ${this.idade} anos, está matriculado na turma ${this.turma} da ${this.curso}`
}

console.log(aluno.dados());