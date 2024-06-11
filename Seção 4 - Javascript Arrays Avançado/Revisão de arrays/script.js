

//Const nomes = ['liander', 'Veronica', 'Lilia']
//Valor por referencia
//Função construtora do array, pouco usada
const nomes = new Array('liander', 'Veronica', 'Lilia')
const nova = [...nomes]

// Se usarmos o spreed operator criamos uma copia do array e
// não ira apontar para o mesmo ponto na memoria
const removido = nova.pop();
console.log(nomes)
console.log(nova, removido)

nomes.push('anderson')
nomes.unshift('Lilia')
console.log(nomes)

const nomesSlice = nomes.slice(0, 3)
console.log(nomesSlice)