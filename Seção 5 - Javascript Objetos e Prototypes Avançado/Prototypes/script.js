//Prototypes
//Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    /*this.mostraNome = () => {
        return `${this.nome} ${this.sobrenome}`
    }*/
}

//usar os metodos com o prototype melhora a perfomace
Pessoa.prototype.mostrarNomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

//Instancia
const p1 = new Pessoa('liander', 'vinicius')
const p2 = new Pessoa('veronica', 'costa')

console.log(p1.mostrarNomeCompleto())
console.log(p2.mostrarNomeCompleto())