const prompt = require('prompt-sync')();

let idade=0, menos21=0, mais50=0;

while(idade != -99){
    idade = Number(prompt(`escreva sua idade ([-99] finaliza): `));
    if(idade < 21 && idade != -99){
        menos21++;
    }
    else if(idade > 50){
        mais50++;
    }
}

console.log(`\ntotal de pessoas com menos de 21 anos são: ${menos21}`);
console.log(`total de pessoas com mais de 50 anos são: ${mais50}`);