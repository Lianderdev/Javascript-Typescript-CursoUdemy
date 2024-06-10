//Funções do objeto

//Object.create
const proto = {
    fala() {
        console.log('oi')
    }
}
const objetoCriado = Object.create(proto)
objetoCriado.fala()

//Object.values - Object.keys - Object.entries
const pessoas = {
    nome: 'liander',
    sobrenome: 'souza'
}

console.log(Object.values(pessoas))
console.log(Object.keys(pessoas))
console.log(Object.entries(pessoas))

//Object.freeze
const carro = {
    marca: 'ferrari'
}

Object.freeze(carro)

carro.marca = 'bmw'
console.log(carro.marca)

console.log(Object.isFrozen(carro))

//Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(carro, 'marca'))


//Object.getOwnPropertyDescriptors
console.log(Object.getOwnPropertyDescriptors(pessoas))

//Object.getPrototypeOf
const car = Object.getPrototypeOf(carro)
console.log(car)


//Object.setPrototypeOf
const beber = {
    bebe() {
        console.log('estou bebendo')
    }
}

const obj = {}
Object.setPrototypeOf(obj, beber)
obj.bebe()


const animal = {
    nome: 'pato',
    idade: '23'
}

const Animal2 = {...animal}
console.log(Animal2)

//Object.is
console.log(Object.is(1, 1))
console.log(Object.is(1, '1'))

const notebook = {
    preco: 1200
}

//Object.preventExtensions
Object.preventExtensions(notebook)
notebook.cor = 'preto'
console.log(notebook)
console.log(Object.isExtensible(notebook))