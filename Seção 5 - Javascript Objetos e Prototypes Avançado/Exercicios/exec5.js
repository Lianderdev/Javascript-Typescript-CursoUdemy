/* Funções Básicas:
Crie uma função que receba um array de números e retorne a soma de todos os elementos.
Crie uma função que receba um número e retorne se ele é par ou ímpar.
Crie uma função que receba uma string e retorne a string invertida.*/

function  somaArray(arr) {
    let total = 0
    arr.forEach(elemt => {
        total += elemt
    });
    return total
}
const total = somaArray([1, 2, 3, 4, 5])
console.log(total)

const numeroPositivoNegativo = num => num % 2 === 0 ? 'positivo' : 'negativo' 
console.log(numeroPositivoNegativo(3))


const stringInvertida = str => {
    return str.split('').reverse().join('')
}
console.log(stringInvertida('liander'))