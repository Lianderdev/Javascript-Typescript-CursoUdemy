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


function desestruturaçãoObj ({nome, sobrenome}) {
    console.log(nome, sobrenome)
}

const obj = {nome: 'liander', sobrenome: 'Souza'} 
desestruturaçãoObj(obj)



function desestruturaçãoArray([valor1, valor2]) {
    console.log(valor1, valor2)
}

const arr = ['Janeiro', 'Fevereiro..']
desestruturaçãoArray(arr)


//Rest Operator ira pegar os ultimos argumentos que n estão nos parametros

const somaF = function(operador, acumulador, ...numeros) {

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }
    console.log(acumulador)
};

somaF('*', 1, 1, 2, 3, 4, 5)

const exemploRest = (...args) => {
    console.log(args)
}

exemploRest('tra', 'la', 'la')
