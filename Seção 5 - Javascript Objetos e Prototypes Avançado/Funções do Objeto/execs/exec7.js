/*Questão 9: Object.setPrototypeOf()
Pergunta: Como você definiria o protótipo de child para ser o objeto parent?*/

const parent = {
    name: 'liander',
    falaNome() {
        return this.name
    }
}

const child = {}

Object.setPrototypeOf(child, parent)

console.log(child.falaNome())