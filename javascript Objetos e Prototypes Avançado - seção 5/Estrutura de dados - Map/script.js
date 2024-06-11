//Estrutura de dados Map
const pessoas = [
    {id: 3, nome: 'liander'},
    {id: 2, nome: 'anderson'},
    {id: 1, nome: 'lilia'},
]

/*
const novasPessoas = {};

for (let pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = {... pessoa}
}*/

const novasPessoas = new Map();

for (let pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, {... pessoa}) //set- seta o valor (chave, valor setado)
}

novasPessoas.delete(1)
console.log(novasPessoas)
console.log(novasPessoas.get(2))//get obtem o valor

for (let pessoas of novasPessoas.values()) {
    console.log(pessoas) 
}