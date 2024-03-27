// A estrutura de condição for in serve para iteragir sobre as propiedades de um objeto

const pessoas = {
    nome: 'Liander',
    sobrenome: 'Souza',
    idade: 19
}


for (let pessoa in pessoas){
    console.log(pessoa, pessoas[pessoa])
}

// pessoa acessa as propriedades e pessoa[pessoa] acessa os valores


