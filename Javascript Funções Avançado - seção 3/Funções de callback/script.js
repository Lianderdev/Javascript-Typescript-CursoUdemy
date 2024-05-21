const GeraNumeroRondamico = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function mostrarF1 (callback) {
    setTimeout(() => {
        console.log('F1')
        if (callback) callback()
    }, GeraNumeroRondamico());
}

function mostrarF2 (callback) {
    setTimeout (() => {
        console.log('F2')
        if (callback) callback()
    },  GeraNumeroRondamico())
}

function mostrarF3 (callback) {
    setTimeout (() => {
        console.log('F3')
        if (callback) callback()
    }, GeraNumeroRondamico())
}

/*
mostrarF1(function() {
    mostrarF2(function() {
        mostrarF3(function() {
            console.log('Amo minha amarela')
        })
    })
})
*/

mostrarF1(f1Callback)

function f1Callback() {
    mostrarF2(f2Callback)
}

function f2Callback () {
    mostrarF3(f3Callback)
}
function f3Callback () {
    console.log('amo a veve')
}

const MostrarNome = (callback) => {
    const nome = 'liander'
    callback(nome)
}

const ExibirNome = (nome) => {
    console.log(`ola ${nome}`)
}

MostrarNome(ExibirNome)

