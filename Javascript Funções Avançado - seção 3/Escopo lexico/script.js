// Escopo <- è a visibilidade de uma varieavel
// Escopo Lexico <- é o fato de funções aninhadas estarem sujeitas a buscar variaves acima dela 
const nome = 'liander'
function falaNome () {
    console.log(nome)
}

function mostraNome () {
    const nome = 'Vinicius'
    falaNome()
}
mostraNome()

function external() {
    const book = 'Harry Poter'

    function internal () {
        return book.toUpperCase()
    }

    console.log(internal())
}

external()