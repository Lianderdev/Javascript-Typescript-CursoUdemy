/*Encadeamento de Promises
Crie duas funções que retornem promises. A primeira resolve após 1 segundo com a mensagem "Primeira Promessa Resolvida". 
A segunda resolve após 2 segundos com a mensagem "Segunda Promessa Resolvida". Encadeie as duas funções.*/

function primeiraFuncao() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Primeira Promessa Resolvida')
        }, 1000)
    })
}

function segundaFuncao() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Segunda Promessa Resolvida')
        }, 2000)
    })
}

primeiraFuncao()
    .then((msg) => {
        console.log(msg)
        return segundaFuncao()
    })
    .then((msg) => {
        console.log(msg)
    }) 