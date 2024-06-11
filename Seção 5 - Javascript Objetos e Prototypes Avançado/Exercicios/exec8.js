/*Questão 2: Herança Prototípica
Crie uma função construtora chamada Animal que receba um nome.
Em seguida, crie outra função construtora chamada Dog que herde de Animal
e receba também uma raça (breed). Adicione um método ao protótipo de Dog chamado bark que 
retorna uma string dizendo "Woof!". */

function Animal (nome) {
    this.nome = nome
}

function Dog (breed) {
    this.breed = breed
}

Dog.prototype.bark = function() {
    
}