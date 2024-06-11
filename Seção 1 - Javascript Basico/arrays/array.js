// Array
let nomes = ['Liander', 'Veronica', 'Anderson', 'Lilia', 'Lia']
console.log(nomes)

// Acessando um elemento do array
console.log(nomes[0])

// Alterando um elemento do array
nomes[0] = 'Souza'

// Push => serve para incrementar um elemento ao array
nomes.push('Victorio')
console.log('Push = ',nomes)

// Pop => serve para retirar um elemento da ultima posição do array
nomes.pop()
console.log('Pop = ',nomes)

// Unshift => serve para inserir um elemento no inicio do array
nomes.unshift('Victorio')
console.log('Unshift = ',nomes)

// Shift => serve para remover um elemento do inicio do array
nomes.shift()
console.log('Shift = ',nomes)

// Lenght => serve para saber o tamanho do array
console.log('Tamanho =', nomes.length)
