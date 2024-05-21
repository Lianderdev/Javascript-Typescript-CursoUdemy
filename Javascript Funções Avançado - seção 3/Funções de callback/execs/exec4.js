/* Exercício 3: Filtrando Valores
Crie uma função meuFiltro que aceita um array e uma função de callback.
A função deve retornar um novo array contendo apenas os valores que passam no teste implementado pelo callback. */

const ArrRondamico = (min = 1, max = 100, quant = 10) => {
    const arrSorteado = []

    for (let i = 0; i < quant; i++) {
        arrSorteado.push(Math.floor(Math.random() * (max - min) + min))
    }

    return arrSorteado
}

const ArrAleatorio = ArrRondamico()

const meuFiltro = (arr, callback) => {
    return callback(arr)
}

const arrFormat = meuFiltro(ArrAleatorio, function(arr) {

    let novoArr  = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) novoArr.push(arr[i])
    }

    return novoArr
})


console.log(arrFormat)
console.log(ArrAleatorio)