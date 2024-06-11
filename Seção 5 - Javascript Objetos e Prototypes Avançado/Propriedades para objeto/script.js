function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.cor = null

const p1 = new Pessoa('liander', 'vinicius')
p1.cor = 'pardo'
console.log(p1.cor)
p1.idade = 19 // adicionando  uma proprieade apenas para a pessoa Um, afetando apenas o mesmo
console.log(p1)

const p2 = new Pessoa('veronica', 'matias')
console.log(p2)
console.log(p2.cor)


const carro = {
    nome: 'Fiat'
}

let carro2 = carro

const carro1 = {
    nome: 'Fiat'
}

console.log(carro === carro2)
console.log(carro === carro1)