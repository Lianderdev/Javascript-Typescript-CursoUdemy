// Funções Geradoras 

// Ex1
function* geradora1() {
    // Código qualquer ..
    yield 'valor 1';
    // Código qualquer ..
    yield 'valor 2';
    // Código qualquer ..
    yield 'valor 3';
}

const g1 = geradora1()
console.log(g1) // retorna o objeto [gerador]

for (let valor of g1) {
    console.log(valor)
}

//Ex2
function* geradora2() {
    let i = 1

    while(true) {
        yield i;
        i++
    }
}

const g2 = geradora2();
console.log(g2.next().value)
console.log(g2.next().value)

//Ex3

function* geradora3() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()
for (let valor of g4) {
    console.log(valor)
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1')
    }

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()