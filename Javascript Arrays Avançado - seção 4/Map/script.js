//Map
//Possui as mesmas regras do filter
// Ira alterar o valor do array, no entanto, não ira alterar do original

//Dobrar o valores abaixo
const numeros = [1, 3, 2, 1, 7, 10]

const numerosBent = numeros.map(number => {
    return number * 2
})
console.log(numerosBent)

//Para cada elemento:
//retorne apenas uma string com o nome da pessoa
//Remova apenas a chave nome do objeto
//Adiciona uma chave iD em cada elemento

const pessoas = [
    {nome: 'liander', 
    idade: 19},

    {nome: 'lilia', 
    idade: 43},

    {nome: 'anderson', 
    idade: 45},
]

const numeroSortId = (min = 1, max = 732423) => {
    const number = Math.random() * (max - min) + min
    return Math.floor(number)
}

const addId = pessoas.map((obj, indice) => {
    obj.id = numeroSortId()
    return obj
})
console.log(addId)


const returnNome = pessoas.map(obj => {
    return obj.nome
})
console.log(returnNome)

const removeKeys = pessoas.map(obj => {
    delete obj.nome
    return obj
})
console.log(removeKeys)

