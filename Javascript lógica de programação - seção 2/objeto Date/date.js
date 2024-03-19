// Datas -> date

// Marco 0
const tresHoras = 60 * 60 * 3 * 1000; // Três horas em milesimos de segundos
const UmDia = 60 * 60 * 24 * 1000; // Um dia em milesimos de segundos
const dataTest = new Date(0 + tresHoras - UmDia); //criando uma função contrutora date
console.log(dataTest.toString())

// Data presente
const presente = new Date()
console.log(presente.toString())

// Data do pedido             A - m - d - hr - mn - s 
const dataPresente = new Date(2023, 5 , 7, 18, 30, 47)
console.log(dataPresente.toString())

// Data do meu Nascimento
const dataNascimento = new Date(2004, 6, 13, 8, 40, 13)
console.log(dataNascimento.toString())

// Data-string
const dataString = new Date('2024-03-19 11:54:38')
console.log(dataString.toString())

// pegadno os elemntos da Data
const dataElements = new Date()
console.log('Dia ', dataElements.getDate())
console.log('Mês ', dataElements.getMonth() + 1)
console.log('Ano ', dataElements.getFullYear())
console.log('Hora ', dataElements.getHours())
console.log('Min ', dataElements.getMinutes())
console.log('Seg ', dataElements.getSeconds())
console.log('ms ', dataElements.getMilliseconds())
console.log('Dia semana', dataElements.getDay())


function zeroEsqueda ( num ) {
    return num >= 10 ? num : `0${num}`
}


function formataData (data) {
    const dia = zeroEsqueda(data.getDate());
    const mes = zeroEsqueda(data.getMonth());
    const ano = zeroEsqueda(data.getFullYear());

    return `${dia}/${mes}/${ano}`
}

const data = new Date()
const dataFormatada = formataData(data)
console.log(dataFormatada)