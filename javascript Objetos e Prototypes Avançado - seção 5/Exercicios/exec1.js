/* Manipulação de Arrays:
Crie um array de números inteiros.
Adicione um número no final do array.
Remova o primeiro número do array.
Encontre o maior número no array.
Inverta a ordem dos elementos no array. */

const numeros = [1, 12, 3, 40, 5, 6, 7, 8, 9]

numeros.push(10)
console.log(numeros)

numeros.shift()
console.log(numeros)

let maior = numeros[0]
numeros.forEach(number => {
    if (number > maior) return maior = number 
})
console.log(maior)

numeros.reverse()
console.log(numeros)