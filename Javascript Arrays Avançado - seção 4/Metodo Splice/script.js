// Splice

const nomes = ['liander', 'lilia', 'anderson', 'veronica']

//nomes.splice(indice, delete, elemento1)

const removidos = nomes.splice(0, 1, 'Rogerio') // O splice retorna um array
const remove = nomes.splice( 1, 0, 'lidiane')
console.log(nomes, removidos)


//Basicamente podemos utilizar todos o metodos de array como push, pop e etc com
//o splice