// DefineProperty - DefineProperties
function Produto(nome, preco, estoque) {


    let estoquePrivado = estoque
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
        estoquePrivado: { 
            enumerable: true, //Mostra a chave (true/ false)
            configurable: true,
            
            get: function(){
                return estoquePrivado
            },
            set: function(valor) {
                if (typeof valor !== 'number') {
                    console.log('bad value');
                    return;
                }

                estoquePrivado = valor
            }
        }
    })
}

const p1 = new Produto('Tenis', 200, 1)
p1.estoque = 'r'
console.log(p1.estoque)

