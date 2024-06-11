/* Crie uma função meuFind que aceita um array e uma função de callback. 
A função deve retornar o primeiro valor que passa no teste implementado pelo callback. 
Se nenhum valor passar no teste, deve retornar undefined. */

const meuFind = (arr, callback) => {
    for (let i = 0; i <= arr.length; i++){
       if (callback(arr[i])) return console.log(arr[i])
    }
    return undefined
}

const arr = [1, 2, 1, 9, 12]
meuFind(arr, function (n) {
    return n > 10
})