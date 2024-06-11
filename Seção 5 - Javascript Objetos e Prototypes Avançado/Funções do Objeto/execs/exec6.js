/*Questão 8: Object.getOwnPropertyDescriptor()
Pergunta: Dado o objeto obj com a propriedade { a: 1 }, 
como você obteria o descritor de propriedade de a?*/

const obj = {
    a: 1,
    b: 2
}

console.log(Object.getOwnPropertyDescriptor(obj, 'a'))
console.log(Object.getOwnPropertyDescriptors(obj))