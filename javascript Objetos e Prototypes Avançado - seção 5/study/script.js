//Funções construtoras 

function Pessoa(nome, sobrenome) {

   let sobrenomePrivado = sobrenome
   Object.defineProperties(this, {
    nome: {
        enumerable: true, //Mostra a chave (true/ false)
        value: nome, //Mostra o valor
        writable: true, //Controla se o valor pode ser alterado (true / false)
        configurable: true
    }, 
    sobrenomePrivado: {
        enumerable: true,
        configurable: true,

        get: function() {
            return sobrenomePrivado
        }, 

        set: function(valor) {
            if (typeof valor === 'number') {
                console.log(error)
                return
            }
            sobrenomePrivado = valor
        }

        
    }
   })
}


const p1 = new Pessoa('liander', 'Souza')
p1.nome = 'anderson'
p1.sobrenome = 456
console.log(p1.sobrenome)
console.log(p1)
const p2 = new Pessoa('veronica', 'costa')


delete p2.nome
console.log(p2)