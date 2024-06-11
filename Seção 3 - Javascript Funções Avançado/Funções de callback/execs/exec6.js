/* Exercício 6: Processando Cada Elemento
Crie uma função processaCadaElemento que aceita um array e uma função de callback.
A função deve chamar o callback para cada elemento do array. */

const processaCadaElemento = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

processaCadaElemento([1, 2, 3, 4, 5, 8, 4], function (elemento) {
    console.log(elemento)
})