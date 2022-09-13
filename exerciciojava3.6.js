const prompt = require('prompt-sync')();

let num, totalNum=0, multiplos=0;

do{
    num = Number(prompt('Digite o número (0-Para sair): '));

    if(num % 3 == 0 && num != 0){
        multiplos += num;
        totalNum++;
    }
}while(num != 0);

const media = multiplos / totalNum;

console.log(`\nmédia de números multiplos de 3 é de: ${media.toFixed(1)}`);