/* Exercício 8: Verificação de Palíndromo
Crie uma função verificaPalindromo que aceita uma string e uma função de callback. 
A função deve verificar se a string é um palíndromo (lê-se da mesma forma de trás para frente) e 
passar o resultado (true/false) para o callback. */

const verificaPalindromo = (str, callback) => {
    let strSeparada;
    strSeparada = str.split('').reverse().join('')
    
    callback(strSeparada === str) 
}

verificaPalindromo('ana', function (ehpalidromo) {
    console.log(ehpalidromo)
})