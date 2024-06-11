const botao = document.querySelector('button')
const span = document.querySelector('span')

let contador = 0

botao.addEventListener('click', () => {
    contador++
    span.textContent = contador
})