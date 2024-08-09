const rand = (max = 4, min = 1) => {
    max *= 1000
    min *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}
const promesa = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') return reject('O parametro passado para mensagem, não é do tipo string')
                
            resolve(msg.toLocaleLowerCase() + ' passei na promise bebe')
        }, tempo)
    })
}

// .all
const promises = [
     promesa(22, rand()),
     promesa('promise 1', rand()),
     promesa('promise 2', rand()),
     promesa('promise 3', rand()),
]

Promise.all(promises)
    .then((resolve) => {
        console.log(resolve)
    })
    .catch(e => {
        console.log(e)
    })


// .race
Promise.race(promises)
    .then(resolve => {
        console.log(resolve)
    })
    .catch(e => console.log(e))


