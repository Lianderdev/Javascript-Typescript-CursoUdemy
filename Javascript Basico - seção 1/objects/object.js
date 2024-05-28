// Object

// Criando um objeto
const pessoas = {
    nome: 'Liander',
    sobrenome: 'Vinicius',
    idade: 19
}

// Acessando os dados do objeto
console.log(`Meu nome é ${pessoas.nome} ${pessoas.sobrenome} e tenho ${pessoas.idade} !`)

// Criando uma Função para criar objetos 
function CriarObjetos (nome, sobrenome, idade){
    return {nome: nome,
            sobrenome: sobrenome,
            idade: idade
    }

}
let pessoa1 = CriarObjetos('liander', 'vincius', 19)
console.log(pessoa1.nome, pessoa1.sobrenome)

const person = {
    nome: 'Liander',
    sobrenome: 'Souza',
    falanome: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const fala = person.falanome()
console.log(fala)