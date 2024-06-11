/* Manipulação de Objetos:
Crie um objeto que represente uma pessoa com propriedades nome, idade e profissao.
Adicione uma nova propriedade cidade ao objeto.
Altere o valor da propriedade idade.
Remova a propriedade profissao.
Liste todas as propriedades do objeto. */

const pessoa = {
    nome: 'Liander',
    sobrenome: 'idade',
    idade: 18,
    profissao: 'Futuro Dev'
}

pessoa.cidade = 'Ananindeua'
pessoa.idade = 19
delete pessoa.profissao
console.log(pessoa)

let i = 0;
for (let valor in pessoa ) {
    i++
    console.log(i , valor, pessoa[valor])
}