const rand = (min, max) => {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

const esperaAi = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        if ( typeof msg !== 'string') reject('error')
        setTimeout(()=> {
            resolve(msg) // todo resolve cai no then
        }, tempo)
    })
}

esperaAi('conectando com o bd', rand(1, 4))
    .then(resolve =>{ 
        console.log(resolve)
        return esperaAi('procurando dados', rand(1, 5))
    })
    .then(resolve => {
        console.log(resolve)
        return esperaAi(2, rand(1, 5))
    })
    .then(resolve => {
        console.log(resolve)
        return esperaAi('exibindo dados', rand(1, 5))
    })
    .then(resolve => {
        console.log(resolve)
    })
    .catch(e => {
        console.log(e)
    })

console.log(typeof Promise)