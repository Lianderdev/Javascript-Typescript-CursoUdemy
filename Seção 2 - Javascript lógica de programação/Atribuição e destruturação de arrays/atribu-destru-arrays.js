// Atrubuição e destruturação de arrays

const numeros = [10, 20, 30, 40, 50, 60]
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros 
// ( ... = rest ) serve para pegar o resto dos elementos

console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)

// Espaços vazios serve para pular elemento no array
const [um, , tres, , cinco] = numeros 
console.log(um, tres, cinco)

const lista = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Destruturando o array
const [lista1, lista2, lista3] = lista

console.log(lista1)
console.log(lista2)
console.log(lista3)

// Como acessar o array dentro do array
console.log(lista[0])

// Como acessar o elemento do array dentro do array
console.log(lista[1][2])

