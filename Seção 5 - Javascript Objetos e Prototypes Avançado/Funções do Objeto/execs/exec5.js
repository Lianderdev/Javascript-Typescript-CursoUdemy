/* Questão 7: Object.seal()
Pergunta: Considere o seguinte código. O que será impresso no console?
javascript */

const obj = { a: 1 };
Object.seal(obj);
obj.b = 3
obj.a = 2;
delete obj.a;
console.log(obj);

console.log(Object.isSealed(obj))