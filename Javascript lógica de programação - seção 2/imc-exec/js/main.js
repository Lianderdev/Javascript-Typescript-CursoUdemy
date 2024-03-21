const form = document.querySelector('form')
const resultado = document.querySelector('.resultado-imc')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const peso = document.getElementById('peso').value; // pegando o valor do input
    const altura = document.getElementById('altura').value;

    let imc = peso / (altura * altura);

    resultado.classList.add('paragrafo-resultado-vermelho');
    
    if (imc < 18.5){
        resultado.textContent =  `Seu iMC é ${imc.toFixed(2)} (Abaixo do peso)`
    } else if ( imc > 18.5 && imc < 24.9) {
        resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Peso normal)`
        resultado.classList.remove('paragrafo-resultado-vermelho')
        resultado.classList.add('paragrafo-resultado')
    } else if ( imc > 25 && imc < 29.9) {
        resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Sobrepeso)`
    } else if ( imc > 30 && imc < 34.9) {
        resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Obesidade grau 1)`
    } else if ( imc > 35 && imc < 39.9) {
        resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Obesidade grau 2)`
    } else if (imc > 40){
        resultado.textContent = `Seu iMC é ${imc.toFixed(2)} (Obesidade grau 3)`
    } else {
        resultado.textContent = `Valor invalido`
    }

})
