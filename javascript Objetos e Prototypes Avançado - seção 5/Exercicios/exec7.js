/*Questão 1: Adicionando Métodos ao Protótipo
Crie uma função construtora chamada Person que receba um nome e idade. 
Adicione um método ao protótipo chamado introduce que retorna uma string com uma saudação
incluindo o nome e a idade. */


function Person(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Person.prototype.introduce = function() {
    return `Suadação ${this.nome} com ${this.idade} anos`
}

const p1 = new Person('veronica', 19)
console.log(Object.getPrototypeOf(p1))
console.log(p1.introduce())
