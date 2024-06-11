function TreinandoArgumentos () {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

TreinandoArgumentos(1, 2, 4, 5)

const Treinandoparamentros = function (num, num2, num3 = 2) {
    return num + num2 + num3
}

console.log(Treinandoparamentros(2, null))


const treinandoRest = (...numeros) => {
    return numeros 
}

console.log(treinandoRest(1, 2, 3, 4, 5, 6))


const CriaElemento = () => {
    let div = document.createElement('div')
    return div
}

const ColocaElemento = () => {
    let div = CriaElemento()
    section.append(div)
}


const criaObjeto = (nome, sobrenome) => {
    const obj = {
        nome: nome,
        sobrenome: sobrenome
    }

    return obj
}

const obj = criaObjeto('liander', 'souza')
console.log(obj)


const criaArr = (el) => {
    for (let i = 0; i < 5; i++) {
        
    }
}