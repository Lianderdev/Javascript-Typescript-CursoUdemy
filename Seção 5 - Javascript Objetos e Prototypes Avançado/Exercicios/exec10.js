/* Questão 4: Extensão de Protótipos
Crie uma função construtora Vehicle que tenha uma propriedade make. 
Em seguida, crie uma função construtora Car que herde de Vehicle e tenha também uma propriedade model. a
dicione um método ao protótipo de Car chamado getInfo que retorna uma string com o make e o model. */

function Vehicle(make) {
    this.make = make
}

function Car(make, model) {
    Vehicle.call(this, make)
    this.model = model
}

Car.prototype.getInfo = function() {
    return `${this.make} ${this.model}`
}

const c1 = new Car('tfyt', 'fiat')
console.log(c1.getInfo())