function strUpercase(palavras) {

    let nov = []
    for (let i = 0; i < palavras.length; i++){
        let str = palavras[i].toUpperCase()
        nov.push(str)

    }

    return nov
}

console.log(strUpercase(['java', 'javascript', 'python']))
