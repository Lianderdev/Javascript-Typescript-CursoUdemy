/* Exercício 2: Contador de Caracteres
Crie uma função contaCaracteres que aceita uma string e uma função de callback. 
A função deve contar a quantidade de caracteres na string e passar o resultado para o callback. */

const contaCaracteres = (str, callback) => {
    callback(str, str.length)
}

contaCaracteres('liander', function(str, quant) {
    console.log(`A palavra ${str}, possui ${quant} letras!`)
})