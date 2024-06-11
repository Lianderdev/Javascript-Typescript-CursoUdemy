// This

// Vinculação padrão <- Função associado ao objeto global
function mostrar() {
    console.log(this)
}

mostrar()

// Vinculação implicita <- toda vez que chamamos uma função
// dentro de um objeto ela se torna um metodo e esta associada implicitamente ao objeto
const menino = {
    nome: 'liander',
    jogo: ['FF', 'Call of Duth', 'Bomba path'],
    mostraJogos() {
        console.log(this.jogo)
    }
}

menino.mostraJogos()

// Vinculação explicita com o metodo call e apply
// Usamos call quando tem apenas um argumento
// Usamos apply quando tem varios argumentos em forma de array

const jogo = {
    nome: 'FF',
    ano: 2017
}

const carro = {
    nome: 'Toyota',
    ano: 2020,
    tipo: 'sport',

    mostrarNome(cidade, estado) {
       console.log(this.nome, this.tipo, cidade, estado)
    },

    trocarAno(ano) {
        this.ano = ano
    }
}

carro.mostrarNome.apply(carro, ['ananindeua', 'pará'])

console.log(carro.ano)
carro.trocarAno(2030)
console.log(carro.ano)

console.log(jogo.ano)
carro.trocarAno.call(jogo, 2018)

const mostrarAno = carro.trocarAno.bind(jogo, 2011)
console.log(jogo.ano)
mostrarAno()

console.log(jogo.ano)
mostrarAno(jogo, 2017)


