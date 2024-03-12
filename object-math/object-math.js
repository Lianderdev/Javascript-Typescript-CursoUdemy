// Objeto Math
let num = 9.545

// Floor => Arredondando o number para baixo
let num1 = Math.floor(num)
console.log(`floor = ${num1}`)

// Ceil => Arredondando o number para cima
let num2 = Math.ceil(num)
console.log(`ceil = ${num2}`)

// Round => Arredonda automaticamente para o mais proximo
let num3 = Math.round(num)
console.log(`round = ${num3}`)

// Max => pega o maior número de uma sequencia de números
console.log('max-maior = ',Math.max(1,2,3,4,5,6,7,8,9,-10))

// Min => pega o menor número de uma sequencia de números
console.log('max-maior = ',Math.min(1,2,3,4,5,6,7,8,9,-10))

// Randon => gera uma numero aleatorio
console.log('aleatoiro-random = ', Math.round(Math.random() * (10 - 5) + 5))

// Sqrt => serve para fazer a raiz quadrada
console.log('Raiz quadrada-sqrt =', Math.sqrt(num))

// OBS: Em js é possivel realizar uma divisão por 0, o resultado séra (Infinity) e retorna (true)