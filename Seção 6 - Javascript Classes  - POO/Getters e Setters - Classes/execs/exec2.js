/*Questão 6: Combinação de Propriedades
Crie uma classe NomeCompleto com propriedades primeiroNome e ultimoNome. 
Adicione um getter nomeCompleto que retorna o nome completo 
(primeiroNome + " " + ultimoNome) e um setter nomeCompleto que 
permite definir ambos primeiroNome e ultimoNome a partir de uma string com o nome completo. */

class NomeCompleto {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get getNameCompleted() {
        return (this.firstName + ' ' +  this.lastName)
    }

    set setNameCompleto(name) {
        let nameFormat = name.split(' ')
        this.firstName = nameFormat.shift()
        this.lastName = nameFormat.join(' ')
    }

}

const p1 = new NomeCompleto('liander', 'vinicius amorim de souza')
p1.setNameCompleto = 'Veronica Matias Costa'
console.log(p1)