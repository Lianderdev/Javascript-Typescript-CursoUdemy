/*Questão 1: Object.create()
Pergunta: Crie um objeto animal com a propriedade type com o valor 'mammal'. 
Depois, crie um novo objeto dog que tenha animal como seu protótipo e adicione a propriedade breed com o valor 'Labrador'. 
Verifique se dog herda a propriedade type de animal*/

const animal = {
    type: 'mammal'
}

const dog = Object.create(animal)
dog.breed = 'Labrador'
console.log(dog.type, dog.breed)