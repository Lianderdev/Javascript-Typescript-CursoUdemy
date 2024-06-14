/*Criação de Classe e Instâncias:
Crie uma classe Carro que tenha propriedades como marca, modelo e ano. 
Adicione um método chamado descricao que retorne uma string descrevendo o carro. 
Crie duas instâncias dessa classe e chame o método descricao para cada uma delas. */

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    descricao(){
        return `${this.marca} | ${this.modelo} | ${this.ano}`
    }
}

const c1 = new Carro('Ferrary', '1000', '2010')
const c2 = new Carro('Bugatti', 'cw20', '2005')
console.log(c1.descricao())
console.log(c2.descricao())

Carro.compararAnos = function(c1, c2) {
    if (c1.ano > c2.ano) return c2.ano
    return c1.ano
}

console.log(Carro.compararAnos(c1, c2))
/*Métodos Estáticos:
Adicione um método estático à classe Carro chamado compararAnos 
que receba dois objetos Carro e retorne o mais novo. 
Teste esse método com duas instâncias diferentes de Carro.*/