// Function

// Como criar uma function
function soma ( x, y ) {
    console.log('adição :', x + y) // não retorna nenhum valor
}
soma(2, 2)

function multplicacao ( x , y ){ // entre ( ) estão os parâmetros
    let resutado = x * y
    return resutado // retorna valor
}

let resutado = multplicacao(2, 4) // entre ( ) estão os argumentos 
console.log('multiplicação e valor retornado:', resutado)

// Function anonimas
const anonimaRaiz = function (x) {
    return x ** 0.5
};
console.log('Raiz quadrada: ',anonimaRaiz(9))

// Arrow function
const subtração = (x, y) => x - y;

console.log('subtração: ',subtração( 8, 4))

