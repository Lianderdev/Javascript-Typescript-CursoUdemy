//Classes em Js

//Criando Class
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falaNome() {
        return console.log(`sou o ${this.nome}, tenho ${this.idade} anos`)
    }
}

const pessoa = new Pessoa('liander', 19)
pessoa.falaNome()