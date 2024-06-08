/* Filtrando e Transformando Arrays:
Crie um array de números de 1 a 10.
Use o método filter para obter apenas os números pares.
Use o método map para multiplicar cada número por 2.
Use o método reduce para somar todos os números no array. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosFiltrados = numeros.filter(number => {
    return number % 2 == 0
})
console.log(numerosFiltrados)

const numerosMapeados = numerosFiltrados.map(number => {
    return number * 2
})
console.log(numerosMapeados)

const numerosReduzido = numerosMapeados.reduce((acumulador, number) => {
    return acumulador += number
}, 0)
console.log(numerosReduzido)