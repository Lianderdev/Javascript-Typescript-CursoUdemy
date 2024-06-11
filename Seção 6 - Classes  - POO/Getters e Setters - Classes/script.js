class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get sobrenomeCorreto() {
        return this.sobrenome
    }

    set sobrenomeCorreto(valor) {
        if (typeof valor !== 'string' || valor.length <= 0) return
        this.sobrenome = valor
    }
}


const pessoa1 = new Pessoa('liander', 'souza')
console.log(pessoa1)

pessoa1.sobrenomeCorreto = ''
console.log(pessoa1.sobrenome)