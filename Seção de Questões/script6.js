const descubraMedia = arr => {

    let arrReduzido = arr .reduce((ac, el) => { 
        ac += el 
        return ac
    }, 0)

    let media = arrReduzido / arr.length

    return media.toFixed(2)
}

console.log(descubraMedia([10, 9, 8.5, 7]))