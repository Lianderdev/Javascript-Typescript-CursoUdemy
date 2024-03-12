let num = Number(prompt('Digite um número: '))
let number = document.getElementById('numero')
let content = document.querySelector('.content')

numero.innerHTML = num
content.innerHTML += `Seu número é ${num} <br>`
content.innerHTML += `Raiz quadrada = ${Math.sqrt(num)} <br>`
content.innerHTML += `É inteiro = ${Number.isInteger(num)} <br>`
content.innerHTML += `É NaN = ${Number.isNaN(num)} <br>`
content.innerHTML += `Arredonando pra cima = ${Math.ceil(num)} <br>`
content.innerHTML += `Com duas casas decimais = ${num.toFixed(2)} <br>`
