/*
Questão 4: Propriedades Privadas
Crie uma classe Pessoa com uma propriedade privada _idade. 
Use getters e setters para acessar e modificar _idade.
O setter deve garantir que a idade seja um número positivo. */

class Pessoa {

    #idade;

    constructor(idade) {
       this.#idade = idade
    }

    get getIdade() {
        return this.#idade
    }

    set setIdade(valor) {
        if ( valor <= 0 ) return
        this.#idade = valor
    }
}

const pessoa = new Pessoa(13)
pessoa.idade = 10
pessoa.setIdade = 9
console.log(pessoa.getIdade)
