// Return <- retorna um valor e termina a função

function soma (a, b) { // função que retorna algo
    return a + b
}
console.log(soma(1, 2))

function soma2 (a, b){ // funçao inutil que não retorna nada
    console.log(a + b)
}
soma2(5, 5)


function criaObj (nome, sobrenome) {
    return {nome, sobrenome}
}
const nome1 = criaObj('liander', 'vinicius')
console.log(nome1)