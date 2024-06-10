/* Questão 6: Object.freeze()
Pergunta: O que acontecerá quando você tentar modificar uma propriedade 
do objeto obj depois de chamar Object.freeze(obj)?
*/

const pessoa = {
    nome: 'liander',
}

Object.freeze(pessoa)
pessoa.nome = 'veve'
console.log(pessoa.nome)
console.log(Object.isFrozen(pessoa))