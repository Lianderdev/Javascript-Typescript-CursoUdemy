//Promisse em estado pendente
const fazerpedido = new Promise((resolve, msg) => {
    setTimeout(() => {
        console.log('recebendo o pedido')
        resolve(msg)
    }, 1000)
})

