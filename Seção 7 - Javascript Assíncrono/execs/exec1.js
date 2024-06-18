const soma = new Promise((resolve, reject) => {
    let total = 1 + 2

    if ( total !== 2) {
        reject()
        return
    } else {
        resolve()
    }
})

soma
    .then(() => {
        console.log('valor igual a 2')
    })
    .catch(() => {
        console.log('valor diferente de 2')
    })
    .finally (() => {
        console.log('soma finalizada')
    })

console.log('para o retonar o then o js precisa fazer dois loops, o que significa que essa mensagem irar aparecer antes do retorno da promisse')