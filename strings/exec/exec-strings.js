let nome = prompt('Digite seu nome completo: ')

document.body.innerHTML += `O seu nome é ${nome} <br>`
document.body.innerHTML += `O seu nome tem ${nome.length} letras  <br> `
document.body.innerHTML += `O segunda letra do seu nome é ${nome[1]}  <br> `
document.body.innerHTML += `Qual o primeiro indice da letra do seu nome: ${nome.indexOf('liander')}  <br> `
document.body.innerHTML += `As ultimas 3 letras do seu nome ${nome.slice(-3)} <br>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`
document.body.innerHTML += `O seu nome com letras maiusculas são: ${nome.toUpperCase()} <br>`
document.body.innerHTML += `O seu nome com letras minusculas são: ${nome.toLowerCase()} <br>`