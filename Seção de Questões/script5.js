const quantidadeDeVogais = str => {
    let arrSTR = str.split('')
    let count = 0
    for (let letra of arrSTR) {
        if (letra == 'a' || letra == 'e' || letra == 'i' ||letra == 'o' ||letra == 'u'){
            count += 1
        }
    }
    return count
}
console.log(quantidadeDeVogais('Veronica'))