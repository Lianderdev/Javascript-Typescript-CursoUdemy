// Revisando Objetos
const people = {
    name: 'Liander',
    lastname: 'Vinicius'
};
console.log(people.name, people.lastname)

//Forma dinamica 
const chave = 'name'
console.log(people[chave])


//New Object <- Construtor
const people1 = new Object()
people1.name = 'Lilia'
people1.lastname = 'Viviane'

delete people1.lastname //Apaga a chave
console.log(people1)


//Metodos dentro de objetos
const people3 = {
    name: 'Anderson',
    lastname: 'Venicius',
    idade: 42,
    falaNome() {
        console.log(`${this.name} ${this.lastname}`)
    },

    getDataNascimento() {
        const data = new Date()
        const year = data.getFullYear()
        return  year - this.idade 
    }
};

people3.falaNome()
console.log(people3.getDataNascimento())

//Percorrendo objetos com for 
for (let chave in people3) {
    console.log(chave) //Ver chave 
    console.log(people3[chave]) //Ver valor 
}

//Criando Objetos <- função construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this) // com essa função só podemos manipular os objetos aq
}

const p1 = new Pessoa('liander', 'souza')
p1.nome = 'Anderson' //Podemos mudar os valores
const p2 = new Pessoa('veronica', 'costa')
console.log(p1)
console.log(p2)


//Criando objetos <- função de fabrica
function criaPessoa (nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        falaNome1() {
            return `${this.nome} ${this.sobrenome}`
        }
     }
}
const p11 = criaPessoa('liander', 'Souza')
console.log(p11.falaNome1())

//Object.freeze(this) <- pode se usada em array tambem