console.log('mensagem 1')

setTimeout(() => {
    console.log('mensagem 2')
}, 0);

let promessa = new Promise((resolver) => {
    resolver()
})

promessa.then(() => {
    console.log('mensagem 3')
}).then(() => {
    console.log('mensagem 4')
})

console.log('mensagem 5')
