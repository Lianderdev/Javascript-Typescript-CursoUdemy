//Reduce

//Como primeiro parametro diverge das outras funções, recebendo um acumulador

const numbers = [1, 2, 3, 4, 5, 6] 

const sumTotal = numbers.reduce((acumulador, valor, indice, array) => {
    return acumulador += valor
}, 0)//<- valor do acumulador

console.log(sumTotal)

const numbersPar = numbers.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
        return acumulador
}, [])
console.log(numbersPar)

const pessoas = [
    {nome: 'liander', 
    idade: 19},

    {nome: 'lilia', 
    idade: 43},

    {nome: 'anderson', 
    idade: 45},
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor 
})

console.log(maisVelha)
console.log(pessoas)