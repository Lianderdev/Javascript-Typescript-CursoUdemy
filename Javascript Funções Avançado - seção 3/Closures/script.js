function chamaFuncao () {
    const nome = 'veve'
    return function () {
        return nome
    }
}

const funcao  = chamaFuncao()
console.log(funcao)