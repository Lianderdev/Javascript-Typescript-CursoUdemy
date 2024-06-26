

function baixarPagina() {
    const cache = true

    if (cache) {
        return new Promise((resolve) => {
            resolve('pagina em cache')
        })
    } else {
        return Promise.resolve('Baixei a pagina')
    }
}

baixarPagina()
    .then(dados => {
        console.log(dados)
    })
    .catch(e => console.log(e, 'error'))