//Object.getOwnPropertyDescriptor 
//Mostra as propriedades do objeto
const pessoa = {
    nome: 'liander',
    idade: 19
}

Object.defineProperty(pessoa, 'nome', {
    writable: false,
    configurable: false,
    value: 'veve'
})

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))
console.log(pessoa)

//retorna as chaves 
console.log(Object.keys(pessoa))

//retorna os valores 
console.log(Object.values(pessoa))

//retorna tudo em um array 
console.log(Object.entries(pessoa))

for (let valor of Object.entries(pessoa)) {
    console.log(valor[0], valor[1])
}

const pessoa1 = {...pessoa}
//Object.freeze(pessoa1) <- trava o objeto
pessoa1.nome = 'anderson'
console.log(pessoa1)