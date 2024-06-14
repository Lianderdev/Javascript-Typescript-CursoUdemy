/*Herança:
Crie uma classe Veiculo com propriedades marca e modelo, 
e um método descricao. Depois, crie uma subclasse Moto que adicione a 
propriedade cilindradas e sobreponha o método descricao para incluir as cilindradas na descrição. 
Crie uma instância de Moto e chame o método descricao. */

class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    decricao() {
        return `${this.marca} | ${this.modelo}`
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilidradas) {
        super(marca, modelo)
        this.cilidradas = cilidradas
    }

    decricao() {
        return `${this.marca} | ${this.modelo} | ${this.cilidradas}`
    }
}

const moto = new Moto('Titan', 'novo', 1000)
console.log(moto)