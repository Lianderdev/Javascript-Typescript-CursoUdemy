// Atribuição e desestruturação de Objetos

const pessoa = {
    nome: 'liander',
    sobrenome: 'Souza',
    idade: 19,
    endereco: {
        rua: 'Av Tapajos',
        numero: '23'
    }
}
// Colocando um elemento do obejto dentro de uma variavel
const sobrenome = pessoa.sobrenome
console.log(sobrenome)

// Atribuição via desestruturação
const { nome: n, idade } = pessoa
console.log(n, idade)

const { endereco: { rua, numero}} = pessoa
console.log(rua, numero)


const { nome , ...resto} = pessoa
console.log(nome, resto)
// Obs: é possivel ter objetos dentro de objetos!!