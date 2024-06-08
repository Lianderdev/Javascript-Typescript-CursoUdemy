const pessoa = {
    nome: 'liander',
    sobrenome: 'souza'
}

const {nome, sobrenome} = {nome: 'veve', sobrenome: 'costa'}
console.log(nome, sobrenome)


const filme = ['deadpool', 2016]

const [f, a] = filme
console.log(f, a)


const numeros = [1, 3, 2, 5, 2, 6, 7]

let conta = []
numeros.forEach(number => {
    conta.push(number)
})

console.log(conta)