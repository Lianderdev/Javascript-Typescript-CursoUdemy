const positivoNegativo = numero => numero % 2 == 0 ? `${numero} par` : `${numero} impar`

for (let i = 0; i < 10; i++) {
    let num = Math.random() * (0 - 1000) + 1000;
    console.log(positivoNegativo(Math.floor(num)))
}