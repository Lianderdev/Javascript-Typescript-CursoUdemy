/* Encapsulamento e Validação:
Crie uma classe Produto que tenha propriedades nome, preco, e desconto. 
Adicione métodos para aplicar um desconto ao preço e para validar que o preço nunca fica abaixo de zero. 
Teste a classe com diferentes valores.*/

class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
    
    aplicaDesconto() {
        let valorDescontado = 0
        if (this.desconto <= this.preco) {
            valorDescontado = this.preco - this.desconto  
            return valorDescontado
        }

        return `O valor de desconto não pode ser aplicado`
    }
}

const p1 = new Produto('chapeu', 100, 180)
console.log(p1)
console.log(p1.aplicaDesconto())

const p2 = new Produto('chapeu', 100, 80)
console.log(p2)
console.log(p2.aplicaDesconto())