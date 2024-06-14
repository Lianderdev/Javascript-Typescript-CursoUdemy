/*  Propriedades e Métodos Estáticos:
Crie uma classe Contador com uma propriedade estática total que conta quantas instâncias 
da classe foram criadas. Adicione um método estático getTotal que retorna o valor de total. 
Teste criando várias instâncias e verificando o valor de total.*/

class Contador {
    static total = 0

    constructor() {
        Contador.total++
    }

    static getTotal() {
        return Contador.total
    }
}

const c1 = new Contador()
const c2 = new Contador()
const c3 = new Contador()
const c4 = new Contador()
const c5 = new Contador()
console.log(Contador.getTotal())