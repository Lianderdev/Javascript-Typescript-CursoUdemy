/*Questão 3: Propriedades Derivadas
Crie uma classe Retangulo com propriedades largura e altura. 
Adicione um getter area que retorna a área do retângulo (largura x altura) e um 
getter perimetro que retorna o perímetro (2 x (largura + altura)). */

class Retangulo {
    constructor(width, heigth) {
        this.width = width
        this.heigth = heigth
    }

    get getAreaRetangulo() {
        return this.width * this.heigth
    }

    get getPerimetroRetangulo() {
        return (2 * (this.width + this.heigth))
    }
}

const r1 = new Retangulo(12, 78) 
console.log(r1.getAreaRetangulo)

console.log(r1.width)
console.log(r1.getPerimetroRetangulo)