/*Questão 5: Formatação de Dados
Crie uma classe Produto com propriedades nome e preco. 
Adicione um getter precoFormatado que retorna o 
preço formatado como uma string com um símbolo de moeda (ex: "R$ 100,00"). */

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    get getPrecoFormatado() {
        return `R$ ${this.preco}`
    }
}

const p1 = new Produto('tenis', 280)
console.log(p1)
console.log(p1.getPrecoFormatado)