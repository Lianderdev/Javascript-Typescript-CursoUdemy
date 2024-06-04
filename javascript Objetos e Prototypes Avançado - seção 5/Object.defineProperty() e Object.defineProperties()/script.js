// DefineProperty - DefineProperties
function Produto(nome, preco, estoque) {

    Object.defineProperties(this, { 
        nome: { 
            enumerable: true, //Mostra a chave (true/ false)
            value: nome, //Mostra o valor
            writable: true, //Controla se o valor pode ser alterado (true / false)
            configurable: false //Pode reconfigurar a chave e apagar se estiver True
    },
        preco: {
            enumerable: true, //Mostra a chave (true/ false)
            value: preco, //Mostra o valor
            writable: true, //Controla se o valor pode ser alterado (true / false)
            configurable: false //Pode reconfigurar a chave e apagar se estiver True
    },
        estoque: { 
            enumerable: true, //Mostra a chave (true/ false)
            value: estoque, //Mostra o valor
            writable: true, //Controla se o valor pode ser alterado (true / false)
            configurable: false //Pode reconfigurar a chave e apagar se estiver True
    }
    
    })
}

const p1 = new Produto('Tenis', 200, 1)
p1.estoque = 4
delete p1.estoque
console.log(p1)

console.log(Object.keys(p1)) // Serve para mostra um array com a chave do objeto


for (let chave in p1) {
    console.log(chave)
}