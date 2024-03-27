// A estrutura de condição for of serve para pecorrer objetos iteraveis como 
// (array - stritngs - etc..)

const nome = 'Liander'

for (let letra of nome){
    console.log(letra)
}

const carros = ['camaro-amarelo', 
                'Brasilia-amarela',
                'Gol-bolinha']

for ( let carro of carros){
    console.log(carro)
}