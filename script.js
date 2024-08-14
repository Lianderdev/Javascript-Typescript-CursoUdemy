const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
                    'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'z', 'y', 'w', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const numeroAleatorio = () => {
    return Math.floor(Math.random() * (36 - 1) + 1)
}

const arrSenha = []
const quantidadeDeCaracteres = 6
const quantidadeDeNumeros = 4
const quantidadeDeLetras = 2

const criaSenha = () => {
    for (let i = 0; i < quantidadeDeCaracteres ; i++) {
        arrSenha.push(caracteres[numeroAleatorio()])
    }
    return arrSenha.join('')
}

console.log(criaSenha())


