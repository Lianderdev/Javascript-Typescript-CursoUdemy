const mediaA = numeros => {

    
    let soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }

    let media  = soma / numeros.length
    return media
    
}
console.log(mediaA([1, 2, 3, 5]))