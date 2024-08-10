// Async - Await

const rand = ( min = 0, max = 3 ) => {
    max *= 1000
    min *= 1000
    return Math.floor( Math.random() * ( max - min ) - min )
}

const promessa =  ( msg, tempo ) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            if (typeof msg !== 'string') return reject('error')
            resolve( msg )
        }, tempo)
    })
}

// Só podemos usar o await quando usamos o async, essa palavra espera uma promessa
async function executa() {
    try {
        const fase1  = await promessa('FASE 1', rand())
        console.log(fase1)

        const fase2  = await promessa('FASE 2', rand())
        console.log(fase2)

        const fase3  = await promessa('FASE 3', rand())
        console.log(fase3)

    } catch(e) { console.log(e)
    } finally { console.log('safo em promises bebe') }
}

executa()

/*
promessa('liander', rand())
    .then( resolve => {
        console.log(resolve)
        return promessa('vinicius', rand())
    })
    .then(resolve => {
        console.log(resolve)
        return promessa(22, rand())
    })
    .catch(e => {
        console.log(e)
    }) */


