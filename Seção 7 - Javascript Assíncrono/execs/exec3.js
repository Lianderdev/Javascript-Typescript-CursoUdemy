/*Promise.all
Crie três promises que resolvem com diferentes mensagens após 1, 2 e 3 
segundos, respectivamente. Use Promise.all para executar todas as 
promises simultaneamente e imprimir as mensagens quando todas forem resolvidas. */

function promiseUm(msg){ 
    return new Promise((resolve, reject) => {
    setTimeout(() => {

        if (typeof msg !== 'string'){
            reject('error')
            return
        }

        resolve('primeira Mensagem')
    }, 1000)
})}

function promiseDois(){ 
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Segunda Mensagem')
    }, 2000)
})}

function promiseTres(){  
return new Promise(resolve => {
    setTimeout(() => {
        resolve('Terceira Mensagem')
    }, 3000)
})}

const promises = [
    promiseUm('li'),
    promiseDois(),
    promiseTres()
]

Promise.all(promises)
    .then ((msg) => {
        console.log(msg)
    })
    .catch (e => {
        console.log(e)
    } )