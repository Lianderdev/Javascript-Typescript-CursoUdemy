 //Composição

 //Desaclopando metodos

const metodos = {
    falaNome() {
        return console.log(`${this.nome}${this.sobrenome} !`)
    }
}
function pessoa(nome, sobrenome) {
    return Object.create(metodos, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    })
}

const p1 = pessoa('liander',' souza')
p1.falaNome()
