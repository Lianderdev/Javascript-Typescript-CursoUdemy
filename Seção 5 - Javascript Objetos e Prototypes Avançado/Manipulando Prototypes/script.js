// New Object -> (pai) Object.prototype <- Cadeia
const objA = {
    chaveA: 'A'
}
// __proto__ = Object.prototype -> não tem pai (__proto__)
// Todas as funções construtoras tem um prototype

// New Object -> (pai) Object.prototype
const objB = {
    chaveB: 'B'
}

const objC = new Object()
objC.chaveC = 'C'

// Configura o Prototype de quem ?
// New Object -> (pai) Protoype objA -> (pai) Object.prototype
Object.setPrototypeOf(objB, objA) // objA sera o prototype de objB
Object.setPrototypeOf(objC, objB) 
console.log(objB.chaveA)
console.log(objC.chaveA ) //Object C herda os prototypes que estão na cadeia


//Acessa o prototype
console.log(Object.getPrototypeOf(objC))


//Trabalhando com funções construtoras
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 100)
//p1.desconto(100)
//p1.aumento(100)
console.log(p1)

const p2 = {
    nome: 'Tenis',
    preco: 300
}

//Para passarmos os metodos de um construtor para um literal precizamos passar o prototype dele 
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(50)
console.log(p2)

//passando o prototype com a (função Obejct.create)
const p3 = Object.create(Produto.prototype)
console.log(p3)



