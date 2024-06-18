//Método .all
//O codigo retorna as promessas apenas se n houver nenhum erro
// se houver ele não retona nenhuma

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

//.all 
const promises = [
    'Primeiro valor',
    esperaAi('Primeira Promise', 1000),
    esperaAi('Segunda Promise', 2000),
    'Ultimo valor'
]

Promise.all(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(e => {
        console.log(e)
    })