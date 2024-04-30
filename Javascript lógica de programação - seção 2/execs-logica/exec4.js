const inverterPalavra = (palavra) => {
    let str = palavra.split('').reverse().join('')
    return str
}

console.log(inverterPalavra('liander'))