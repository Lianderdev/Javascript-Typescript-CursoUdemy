//Promise.race
//Ele ira retornar a promise que executar primeiro
const rand = (min, max) => {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

const esperaAi = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('error')
                return
            } 

            resolve(msg)
            return
        }, tempo)
    })
}

//.race <- A primeira que executar ele retorna e para de rodar 
const promises = [
    esperaAi('Primeira Promise', rand(1, 3)),
    esperaAi('Segunda Promise', rand(1, 3)),
    esperaAi('Terceira Promise', rand(1, 3)),
]

Promise.race(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch(e => {
        console.log(e)
    })