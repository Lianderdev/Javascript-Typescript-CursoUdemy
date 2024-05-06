
function criaVetor(quantidade) {
    let lista = [];
    let listaOrdenada = []
    for (let i = 0; i < quantidade; i++) {
        const numeroAleatorio = Math.random() * 100
        lista.push(numeroAleatorio)
    }
    listaOrdenada= lista.sort()
    return listaOrdenada
}
console.log(criaVetor(10))


