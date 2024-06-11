const obj = {
    nome: 'Liander',
    sobrenome: 'Souza',

    get mostraNome() {
        return `${this.nome} ${this.sobrenome}`
    },

    set formatNome(nome) {
        return [nome, sobrenome] = nome.split(' ')
    }
}

console.log(obj.mostraNome)
console.log(obj.formatNome = 'Veronica Costa')
