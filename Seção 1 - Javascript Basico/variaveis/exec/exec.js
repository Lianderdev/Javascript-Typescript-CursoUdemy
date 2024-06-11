let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
let auxiliar = null;


/* Primeira forma de se resolver
auxiliar = a
a = b
b = c
c = auxiliar

console.log(`${a}, ${b}, ${c} `) */

// Segunda forma de se resolver

[a, b, c] = [b, c, a]

console.log(a, b, c);