/*Criação de Classe e Instâncias:
Crie uma classe Carro que tenha propriedades como marca, modelo e ano. 
Adicione um método chamado descricao que retorne uma string descrevendo o carro. 
Crie duas instâncias dessa classe e chame o método descricao para cada uma delas. */

class Carro {
    constructor(marca, modelo, ano ) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    descricao() {
        return `${this.marca} ${this.modelo} ${this.ano}`
    }
}

const c1 = new Carro('ferrari', 10000, 2002)
const c2 = new Carro('bugatti', 220, 2014)

console.log(c1.descricao())
console.log(c2.descricao())