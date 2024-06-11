/* Questão 3: Verificando Propriedades do Protótipo
Crie uma função construtora Book que tenha propriedades title e author. 
Adicione um método ao protótipo chamado getDetails que retorna uma string com o título e o autor. 
Verifique se uma instância de Book possui a propriedade getDetails diretamente no objeto ou no protótipo.*/

function Book(title, author) {
    this.title = title
    this.author = author
}

Book.prototype.getDetails = function() {
    return `autor: ${this.title}, ${this.author}`
}

const b1 = new Book('futuro Dev', 'liander')
console.log(b1.getDetails())
console.log(Object.getPrototypeOf(b1))
console.log(b1.hasOwnProperty('getDetails')); // false
/* Verifica se a propriedade getDetails é uma propriedade direta da instância myBook 
(definida diretamente no próprio objeto myBook). A função hasOwnProperty retorna false 
porque getDetails está definido no protótipo de Book, não diretamente no objeto myBook.*/

console.log('getDetails' in b1); // true
/* Verifica se a propriedade getDetails está disponível no objeto myBook, 
seja diretamente ou via protótipo. O operador in retorna true porque getDetails está 
disponível no protótipo de Book, o que significa que myBook pode acessá-lo.*/