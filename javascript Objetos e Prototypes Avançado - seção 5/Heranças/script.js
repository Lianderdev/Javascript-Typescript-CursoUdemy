//Heranças
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(valor){
    this.preco += valor
}
Produto.prototype.desconto = function(valor){
    this.preco -= valor
}
function Tenis(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Tenis.prototype = Object.create(Produto.prototype) // Passando o prototype do (Produto) para o (Tenis)
Tenis.prototype.constructor = Tenis //Tornando o construtor de (Tenis) para (Tenis) novamente

Tenis.prototype.aumento = function(quantia) { // Pasando um metodo para Tenis com o mesmo nome do metodo do Produto, quer será chamado primeiro por causa da cadeia de portotypes
    this.preco *= 100
}

const t1 = new Tenis('nike', 550, 'white')
t1.aumento(10)
console.log(t1)

function Caneca(nome, preco, matreial) {
    Produto.call(this, nome, preco)
    this.matreial = matreial
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const c1 = new Caneca('Mickey', 23, 'Vidro')
c1.aumento(100)
console.log(c1)

