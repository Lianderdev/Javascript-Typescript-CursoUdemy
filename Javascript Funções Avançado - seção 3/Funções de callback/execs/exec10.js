/* Exercício 5: Calcular Média
Crie uma função calculaMedia que aceita um array de números e uma função de callback.
A função deve calcular a média dos números e passar o resultado para o callback. */

const notaRandomica = (min = 0, max = 10, provas = 3) => {
    let notas = []
    for (let i = 0; i <= provas; i++) {
        notas.push(Math.floor(Math.random() * (max - min) + min))
    }

    return notas
}

const Notas = notaRandomica()

console.log(Notas)

const calculaMedia = (arr, callback) => {
    let total = 0

    for ( let i in arr) {
         total += arr[i]
    }

    let media = total / arr.length
    callback(media)

}

calculaMedia(Notas, function (media) {
    console.log(`Sua média é ${media}`)
})