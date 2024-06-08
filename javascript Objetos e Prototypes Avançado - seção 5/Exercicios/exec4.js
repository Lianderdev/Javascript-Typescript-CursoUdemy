/*Arrays de Objetos:
Crie um array de objetos, onde cada objeto represente um livro com propriedades titulo, 
autor e anoPublicacao.
Adicione um novo livro ao array.
Encontre o livro mais antigo no array.
Liste todos os títulos de livros publicados após o ano 2000. */

const livros = [
    { 
        livro: 'Harry Potter',
        autor: 'Draco',
        anolacamento: 1985
    },
    { 
        livro: 'Mazer Runner',
        autor: 'Dylan',
        anolacamento: 2011
    }
]
livros.push({livro: 'Jogos Vorazes', autor: 'katiness', anolacamento: 2000})


let menor = livros[0].anolacamento
for (let livro in livros) {
    if (livros[livro].anolacamento > menor) {
        menor < livros[livro].anolacamento
    }
}
console.log(menor)

for (let livro in livros) {
    if (livros[livro].anolacamento >= 2000) {
        console.log(livros[livro].anolacamento)
    }
}
console.log(livros)