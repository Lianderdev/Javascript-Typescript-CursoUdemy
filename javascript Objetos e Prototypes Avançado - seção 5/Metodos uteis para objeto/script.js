// Metodos uteis para Objetos

//passando objetos por referencia
const pessoa = {
    nome: 'liander'
}

const pessoa1 = pessoa //quando fizemos isso os dois objetos apontam para o mesmo local da memoria
pessoa1.nome = 'veve'
console.log(pessoa)

//Copiando objetos para outro objeto
const pessoa2 = {
    ...pessoa,//spread operator
    sobrenome: 'souza'} 
pessoa2.nome = 'lilia'
console.log(pessoa2)
console.log(pessoa)

//Segunda forma de copiar
const pessoa3 = Object.assign({}, pessoa, {idade: 19})
Object.freeze(pessoa3) //Torna o objeto impossivel de ser alterado
pessoa3.nome = 'liander'
console.log(pessoa3)

//ver as chabes do objeto
console.log(Object.keys(pessoa3))

//ver valores do objeto
console.log(Object.values(pessoa2))
