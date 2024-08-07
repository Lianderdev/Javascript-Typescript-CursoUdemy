// Promises <- É um objeto que representa uma eventual conclusão ou falha de uma operação assícrona
// Estados de uma Promise <- pending - fulfilled - rejected

const rand = (max = 4, min = 1) => {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

const promessa = (msg, tempo) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if ( typeof msg !== 'string') return reject('errinho')
                
            resolve(msg)
        }, tempo)
    })
}

promessa('liander', rand())
    .then(resolve => {
        console.log(resolve)
        return promessa('vinicius', rand())
    })
    .then(resolve => {
        console.log(resolve)
        return promessa(22, rand())
    })
    .then (resolve => {
        console.log(resolve)
    })
    .catch(e => {
        console.log(e, 'gostoso')
    })
    .finally(() => {
        console.log('acabou!!')
    })