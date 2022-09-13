const prompt = require('prompt-sync')();

let num=0, soma=0;

do{
    num = Number(prompt('Digite o número (0-para sair): '));
    soma += num;
}while(num != 0);

console.log(`\na somatotal dos números é: ${soma}`);