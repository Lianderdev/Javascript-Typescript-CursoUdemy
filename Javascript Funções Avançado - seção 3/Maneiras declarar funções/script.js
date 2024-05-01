// Formas de declrar funções 

//(Function Hoisting) <- apenas nessa forma de declarção
falaOI()

function falaOI() {
    console.log('Oie')
};

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado')
}

// Podemos executar funções dentro de funções 
function executaFuncao (funcao) {
    console.log('Executando sua função')
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
const arrow = () => {
    console.log('Sou uma arrow functions')
}
arrow()

// Função dentro do objeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
}

obj.falar()
