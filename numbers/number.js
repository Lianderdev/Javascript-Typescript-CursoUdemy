let num1 = 10.200
let num2 = 100
let result = num1 * num2

// serve para determinar o tamanho de casas decimais de um number
result = num1.toFixed(1)
console.log(result)

// serve para tranformar um number em uma string
console.log(num1.toString())
console.log(typeof num1)

// serve para descobrir se o number é inteiro ou não
console.log(Number.isInteger(num1))

// serve para descobrir se é um number ou não
console.log(Number.isNaN(result))