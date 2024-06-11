// Estrutura de repetição While

/*
let controle = 0;
let nome = 'liander';
while ( controle < nome.length) {
    console.log(nome[controle]);
    controle++;
}

console.log('Segue a vida...') */

function sorteador (min, max) {
    let num_sorteado = Math.random() * (max - min) + min;
    return Math.floor(num_sorteado)
}

let number = sorteador(1, 50)


while (number !== 10) {
    number = sorteador(1, 50)
    console.log(number)
}