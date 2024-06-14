//Mixin
let mostraNome = (Base) => class extends Base {
    mostraNome() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

class nome extends mostraNome(Pessoa) {}

const liander = new nome('liander')
liander.mostraNome()