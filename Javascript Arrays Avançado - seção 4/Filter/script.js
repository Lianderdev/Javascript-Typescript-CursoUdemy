// Filter
// É necessario criar um novo array
// Recebe uma função de callback
// Parametros (valor, indice, array)
// O filter não altera o array apenas o filtra

// retorne os números maiores que 10 
const numeros = [4, 12, 6, 13, 4, 67, 2, 13];

function callbackFilter(valor, indice) {
    return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

console.log(numeros)

const numerosFiltrados2 = numeros.filter((valor) => {
    return valor < 10
})

console.log(numerosFiltrados2)


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos de idade
//Retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'liander', 
    idade: 19},

    {nome: 'lilia', 
    idade: 43},

    {nome: 'anderson', 
    idade: 45},

    {nome: 'veronica', 
    idade: 18},

    {nome: 'lili',
    idade: 78}
]

const pessoasFiveLetters = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasFiveLetters)

const pessoasFiftyYears = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasFiftyYears)

// endsWhit <- termina com?
const pessoasFinishA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasFiftyYears)




