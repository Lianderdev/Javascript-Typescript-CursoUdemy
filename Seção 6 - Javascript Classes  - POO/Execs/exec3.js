/*Propriedades Privadas:
Utilize a nova sintaxe para propriedades privadas (prefixadas com #) 
para criar uma classe ContaBancaria com propriedades privadas #saldo e #senha. 
Adicione métodos públicos para depositar e sacar dinheiro, garantindo que apenas a senha correta 
permite sacar. 
Teste esses métodos com instâncias da classe. */

class Contabancaria {
    saldo = 100
    #senha

    constructor(senha) {
        this.#senha = senha
    }
    
    mostra() {
        return `${this.saldo} ${this.#senha}`
    }

    sacar() {
        if (this.#senha === 1345) return `senha valida: saque realizado com sucesso`
        return `senha invalida: O saque falhou`
    }
}

const c1 = new Contabancaria(12345)
console.log(c1.sacar())



