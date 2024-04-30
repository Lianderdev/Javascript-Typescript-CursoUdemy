const li = document.querySelector('li')
const form = document.querySelector('form')
const button = document.querySelector('button')

let frase;
form.addEventListener('input', (letra) => {

    frase = letra.target.value
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    li.textContent += frase
})
