/*Métodos Prototipados:
Crie uma função construtora Pessoa com propriedades nome e idade. 
Adicione um método ao protótipo de Pessoa chamado cumprimentar que retorne 
uma saudação usando o nome da pessoa. 
Crie instâncias e teste o método. */

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.cumprimentar = function() {
    return `Saudações ${this.nome}`
}

const p1 = new Pessoa('liander', 19)
const p2 = new Pessoa('lilia', 19)
const p3 = new Pessoa('Anderson', 19)
console.log(p1)
console.log(p2)
console.log(p3)

