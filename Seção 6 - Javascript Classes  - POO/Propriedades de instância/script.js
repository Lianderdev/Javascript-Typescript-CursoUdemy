//Propriedades de instância
class Number {
    constructor(number) {
        this.number = number
    }
}

Number.NumberEstatico = 12

Number.prototype.NumberPrototipado = 14

const n1 = new Number(10)
console.log(n1) // instacia
console.log(Number.NumberEstatico) // estatico
console.log(n1.NumberPrototipado) // prototipo