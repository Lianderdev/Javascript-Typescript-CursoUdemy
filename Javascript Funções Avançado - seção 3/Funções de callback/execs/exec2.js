/* 
Exercício 1: Saudação Personalizada
Crie uma função saudacao que aceita um nome e uma função de callback. 
A função deve chamar o callback, passando uma mensagem de saudação personalizada. */

const saudacao = (nome, callback) => {
    callback(nome)
}

saudacao('liander', function (mensagem) {
    console.log(`Saudações ${mensagem}`)
})