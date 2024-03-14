// tipo = String
let nome = 'Liander Vinicius'

// serve para pegar uma posição da string
console.log(nome[0]) // L

// ToUpperCase => transforma a string em letras em maiúsculas
console.log(nome.toUpperCase()) // LIANDER VINICIUS

// ToLowerCase => transforma a string em letras em minusculas
console.log(nome.toLowerCase()) // liander vinicius 

// Split => serve para dividir as strings
console.log(nome.split(' ')) // ['Liander', 'Vinicius']

// Replace => serve para trocar determinada string por outra
console.log(nome.replace('Vinicius', 'Souza')) // Liander Souza

// Length => serve para descobrir o tamanho da string
console.log(nome.length) // 16 caracteres

// IndexOf => serve para mostrar a posição que se inicia a string
console.log(nome.indexOf('Vinicius')) // 8