function Pessoa(nome, sobrenome) {
    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: true
        },
        sobrenome: {
            value: sobrenome,
            writable: true,
            enumerable: true,
            configurable: true
        }
    })
}

Pessoa.myFunction = function() { //<- Metodo estatico pois chamamos direto na função construtora
    return console.log(`esta é minha função`)
}

Pessoa.myFunction()

Pessoa.prototype.falaNome = function()  {
    return console.log(this.nome, this.sobrenome)
}

const p1 = new Pessoa('liander', 'souza')
p1.nome = 'veve'
const p2 = new Pessoa('liander', 'Amorim')
p1.falaNome()
p2.falaNome()