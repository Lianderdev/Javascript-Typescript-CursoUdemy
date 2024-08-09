const promessa = new Promise((resolve, reject) => {
    const nome = 'liandr'

    if (nome === 'liander') {
        return resolve('USUARIO CORRETO')
    } else {
        return reject('usuario invalido')
    }
    
})

promessa
    .then(resolve => {
        return resolve.toLowerCase()
    })
    .then(resolve => {
        console.log(resolve)
    })
    .catch(e => {
        console.log(e)
    })

    console.log(promessa)