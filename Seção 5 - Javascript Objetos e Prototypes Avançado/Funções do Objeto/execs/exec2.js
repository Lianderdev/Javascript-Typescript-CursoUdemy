/* Questão 2: Object.assign()
Pergunta: Combine os objetos obj1 e obj2 em um novo objeto combined. 
obj1 tem a propriedade { a: 1, b: 2 } e obj2 tem a propriedade { c: 3, d: 4 }. Qual será o resultado?*/

const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 4
}

const combined = {...obj1, ...obj2}
console.log(combined)