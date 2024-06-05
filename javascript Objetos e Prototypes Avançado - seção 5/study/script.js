// Funções construtoras
function Pessoa(nome, sobrenome, idade) {
    let _nome = nome;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            configurable: true,
            get: function() {
                return _nome;
            },
            set: function(novoNome) {
                if (novoNome.length > 5) {
                    console.log('nome passou!');
                    _nome = novoNome;
                } else {
                    console.log('nome menor que 5');
                }
            }
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: false,
            configurable: true
        },
        idade: {
            enumerable: true,
            value: idade,
            writable: false,
            configurable: true
        }
    });
}

const p1 = new Pessoa('lili', 'souza', 19);
console.log(p1.nome);  // Isso deve imprimir 'lili'

p1.nome = 'alexandre';  // Isso deve passar a verificação e mudar o nome
console.log(p1.nome);  // Isso deve imprimir 'alexandre'

p1.nome = 'ana';  // Isso deve falhar na verificação e não mudar o nome
console.log(p1.nome);  // Isso deve imprimir 'alexandre'

console.log("//////////////////////////////////")


function Carro(marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
}

var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
console.log(carro1)
var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);
console.log(carro2)


function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var jose = new Pessoa("Jose Silva", 33, "M");
var paulo = new Pessoa("Paulo Santos", 39, "M");


// Criamos o objeto carro e pessoa e passamos o objeto pessoa como parametro de carro
var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
carro1.cor = 'black' // adiciona uma proprieadade
delete carro1.ano // deleta uma proprieadade
console.log(carro1)
var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);
console.log(carro2)


console.log("//////////////////////////////////")

const Animal = {
    nome: 'leao',
    tipo: 'carnivoro',
    mostraTipo() {
        console.log(this.tipo)
    }
}
Animal.id = 2384837
console.log(Animal.id)
Animal.mostraTipo()


//Criando um novo objeto sem precisar de uma função construtora com 
//o Object.create
const animal1 = Object.create(Animal)
animal1.nome = 'aranha'
animal1.tipo = 'aracnideo'
console.log(animal1.nome)
animal1.mostraTipo()

