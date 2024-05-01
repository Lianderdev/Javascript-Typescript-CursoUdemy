/* Apenas as funções classicas 
sustenta todos os argumentos enviados*/

//(Arguments) sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b, c)
}

funcao(1, 2, 3, 4, 5)

function funcao2 (a, b, c) {
    console.log(a, b, c,)
}

funcao2(1, 2)


function soma (a, b = 5) { // (b = 5) <- aqui estou definindo um valor padrão caso n entre todos os parametros
    console.log(a + b)
}

soma(2, 2)