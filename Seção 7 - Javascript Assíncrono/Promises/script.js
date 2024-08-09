// Promises <- É um objeto que representa uma eventual conclusão ou falha de uma operação assícrona
// Estados de uma Promise <- pending - fulfilled - rejected
const rand = (max = 4, min = 1) => {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}
const promesa = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') return reject('O parametro passado para mensagem, não é do tipo string')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}
promesa('liander', rand())
    .then(resolved => {
        console.log(resolved)
        return promesa('vinicius', rand())
    })
    .then(resolved => {
        console.log(resolved)
        return promesa(22, rand())
    })
    .then(resolved => {
        console.log(resolved)
    })
    .catch(e => {
        console.log(e)
    })
    .finally(() => {
        console.log('Acabou aq essa promessa')
    })