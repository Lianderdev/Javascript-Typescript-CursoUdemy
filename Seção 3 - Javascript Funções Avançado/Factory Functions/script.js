//Factory Functions ou Funções de Fabrica

//Obs: functions dentro de objetos são chamadas de metodos
//ex: Simples


const criaObjeto = (nome, sobrenome, peso, altura) => {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `O ${this.nome} e o ${assunto}`
        }, 
        peso, 
        altura,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome.join()
            console.log(valor)
        },

        get imc() { // o get irar fingir que imc é um atributo do obj, o geeter obtem o valor
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    }
}

const obj = criaObjeto('liander', 'souza', 75, 1.73)
obj.nomeCompleto = 'Veronica Matias Costa'
console.log(obj.nomeCompleto)

const obj2 = {
    lista: ['jogo', 'futebol', 'namorada'],

    get removeString() {
        return this.lista.length ? this.lista[0] : null;
    },

    set adicionaInicio(item) {
        return this.lista.unshift(item)     
    }
}
console.log(obj2.removeString)
obj2.adicionaInicio = 'tralala'
console.log(obj2.removeString)
