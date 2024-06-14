//Expressão de classe
//Tambem deve ser chamada apois sua declaração


//Forma de declaração
//Expressão de classe pode ser nomeada ou anonima
//Exemplo anonimo
const Soma = class {
//Poderia ser nomeado tbm = const Soma = class Soma {}
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    soma() {  
         return this.num1 + this.num2
    }
}

const s1 = new Soma(2, 2)
console.log(s1.soma())