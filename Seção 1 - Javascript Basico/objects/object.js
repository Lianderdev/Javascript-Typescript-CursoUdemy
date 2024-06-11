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
    falanome: function(cidade, estado) {
        return `${this.nome} ${this.sobrenome} mora em ${cidade} no ${estado}`
    }
}

const fala = person.falanome('Ananindeua', 'Pará')
console.log(fala)


// Call <- serve para usar um metodo pertecente a outro objeto e tambem pode receber argumentos
const person1 = {
    nome: 'Veronica',
    sobrenome: 'Costa'
}

const fala1 = person.falanome.call(person1, 'Tome-açu', 'Pará')
console.log(fala1)

// Apply <- tambem serve para usar metodos pertecentes a ou outro a objeto
// A diferença é quer receber um array como parametro

const person2 = {
    nome: 'Lilia', 
    sobrenome: 'Viviane'
}

const fala2 = person.falanome.apply(person2, ['Bragança', 'Pará'] )
console.log(fala2)
