// Estrutura de repetição (For)


// Encrementando 
// Indo de Um em Um 
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// Indo de Dois em Dois
for (let i = 0; i < 10; i += 2) {  
    console.log(i)
}
console.log('**********************') 

// Decrementando
for (let i = 10; i >= 1; i--) {  
    console.log(i)
}

// Numero pares
for (let i = 0; i <= 10; i++) {  
    console.log(`Número par: ${i} =`,i % 2 === 0)
}

// Percorrendo um Array
const series = ['teen wolf', 'supernatural', 'the oc']

for (let i = 0; i < series.length; i++) {  
    console.log(series[i])
}