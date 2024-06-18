const rand = (min = 0, max = 3) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

const esperaAi = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('error')
            return
        }
        setTimeout(() => {
            resolve(msg)
        }, tempo);

        msg = `${msg} - passei`
    })
}

async function executa() {
    try {
        console.log('inicia')
        const fase1 = await esperaAi('Fase 1', rand())
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)
        console.log('termina')
    } catch(e) {
        console.log(e)
    }
}

executa()