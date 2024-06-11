/* Exercício 2: Operação em Dois Números
Crie uma função operar que aceita dois números e uma função de callback. 
A função deve chamar o callback passando os dois números e retornar o resultado. */


const Operacao = (num1, num2, operador, callback) => {
    return callback(num1, num2, operador)
}

const soma = Operacao(2, 3,'-', function(x, y, operador) {
    if (operador == '+') return x + y 
    if (operador == '*') return x * y 
    if (operador == '/') return x / y 
    if (operador == '-') return x - y 
})

console.log(soma)