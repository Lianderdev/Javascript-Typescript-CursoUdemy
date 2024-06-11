/*Questão 1: Object.create()
Pergunta: Crie um novo objeto child que tenha como protótipo o objeto parent, 
que possui uma propriedade name com o valor 'Parent'. Como você faria isso?*/

const parent = {
    name: 'parent'
}

const child = Object.create(parent)
console.log(child)