const numeros = [1, 2, 3, 4, 5, 6]

for (let num of numeros) {
    if (num === 1) {
        //Continue pula o numero 
        continue
    }
    console.log(num)
    if (num === 3) {
        //Break para a condição quando verdadeira e não mostra o número 
        break
    }
}