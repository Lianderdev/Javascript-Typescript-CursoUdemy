const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const resultado = document.querySelector('.resultado-imc')
const botao = document.querySelector('button')
    
// calculo imc = Peso / (altura * altura)
botao.addEventListener('click', (e) => {
    e.preventDefault()

    let peso1 = parseFloat(peso.value)
    let altura1 = parseFloat(altura.value)

    let imc = peso1 / (altura1 * altura1)
        if (imc < 18.5){
            resultado.textContent =  `Seu iMC é ${imc.toFixed(2)} (Abaixo do peso)`
            console.log(typeof imc)
        } else if ( imc > 18.5 && imc < 24.9) {
            resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Peso normal)`
        } else if ( imc > 25 && imc < 29.9) {
            resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Sobrepeso)`
        } else if ( imc > 30 && imc < 34.9) {
            resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Obesidade grau 1)`
        } else if ( imc > 35 && imc < 39.9) {
            resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Obesidade grau 2)`
        } else {
            resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Obesidade grau 3)`
        }
    }
)
    
