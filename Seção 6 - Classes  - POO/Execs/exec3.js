/*Propriedades Privadas:
Utilize a nova sintaxe para propriedades privadas (prefixadas com #) 
para criar uma classe ContaBancaria com propriedades privadas #saldo e #senha. 
Adicione métodos públicos para depositar e sacar dinheiro, garantindo que apenas a senha correta 
permite sacar. 
Teste esses métodos com instâncias da classe. */

class Contabancaria {
    #saldo = 0
    #senha

    constructor(saldo, senha) {
        this.#senha = senha
    }
    
    mostra() {
        return `${this.#saldo} ${this.#senha}`
    }
}

function sacar(conta) {
    if (conta.senha == '12345') return `senha valida: saque realizado com sucesso`
    return `senha invalida: O saque falhou`
}

const conta = new Contabancaria(160, '12345')
conta.saldo = 12


console.log(sacar(conta))
console.log(conta.mostra())