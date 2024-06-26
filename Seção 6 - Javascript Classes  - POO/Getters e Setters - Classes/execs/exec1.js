/* Questão 1: Básico de Getters e Setters
Crie uma classe Carro com propriedades marca e modelo.
Use getters e setters para acessar e modificar essas propriedades.*/

class Carro {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    get getMarca() {
        return this.marca
    }

    set setMarca(valor) {
        if (typeof valor !== 'string' || valor.length < 0) return
        this.marca = valor
    }

    get getModelo() {
        return this.modelo
    }

    set setModelo(novoModelo) {
        if (typeof novoModelo !== 'string' || novoModelo.length < 0) return
        this.modelo = novoModelo
    }
}

const carro = new Carro('ferrary', 'bug')
carro.setMarca = 'bugatti'
carro.setMarca = 29
carro.setModelo = 12
carro.setModelo = '200'
console.log(carro.modelo)
console.log(carro.getMarca)