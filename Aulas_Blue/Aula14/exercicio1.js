/* Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto.*/

const prompt = require('prompt-sync')();

var produto = "Kit churrasco para 3 pessoas";
var preco = 99.99;
console.log(`O produto ${produto} custa R$ ${preco} reais.`)

var qtd = +prompt("Digite a quantidade desejada: ");    

    var listaproduto = {
        produto: produto,
        preco: preco,
        quantidade: qtd,
        valorcompra: preco.toFixed(2)*qtd.toFixed(2)
    }
    var total = preco*qtd;
console.log(`Você comprou ${qtd} unidade(s) do produto: ${produto} no valor de R$ ${preco} reais cada unidade, totalizando R$ ${total.toFixed(2)} reais`);
    console.log();

/*Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%, se for
entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê
20% de desconto*/

    var desc10 = 0.90;
    var desc15 = 0.85;
    var desc20 = 0.80;

if ((total > 100.00) && (total < 400.00)){
    console.log(`Você teve um desconto de 10% em sua compra, seu novo valor a pagar será de R$ ${total.toFixed(2)*desc10} reais`);

} else if ((total > 400.00) && (total < 500.00)) {
    console.log(`Você teve um desconto de 15% em sua compra, seu novo valor a pagar será R$ ${total.toFixed(2)*desc15}`);

} else if (total > 500.00) {
    console.log(`Você teve um desconto de 20% em sua compra, seu novo valor a pagar será R$ ${total.toFixed(2)*desc20}`);
} else {
    
}