//Heranças em classes
//Para usarmos precisamos da função extends
//Devem ser chamadas a pois sua criação 

class Dispositivos {
    constructor(nome) {
        this.nome = nome
        this.estaLigado = false
    }

    ligado() {
        if (this.estaLigado) {
            console.log('O Despositivo esta ligado')
            return
        }

        this.estaLigado = true
    }

    desligado() {
        if(!this.estaLigado) {
            console.log('O dispostivo esta desligado')
            return
        }

        this.estaLigado = false
    }
}

class Smartphone extends Dispositivos {
    constructor(nome, cor) {
        super(nome)
        this.cor = cor
    }
}

const s1 = new Smartphone('iphone', 'preto')
s1.ligado()
s1.ligado()
console.log(s1)

