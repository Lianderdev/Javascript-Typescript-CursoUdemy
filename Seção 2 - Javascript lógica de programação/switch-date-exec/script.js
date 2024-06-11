const data = new Date()
const diaSemana = data.getDay()
const dia = data.getDate()
const ano = data.getFullYear()
const hrr = data.getHours()
const min = data.getMinutes()

function mostrarData (diaSemana, dia, ano, hrr, min) {

    const h1 = document.querySelector('.text')
    const DiasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desembro',]
    switch (diaSemana){
        case 0:
            return h1.innerHTML =  `<h1>${DiasDaSemana[0]}, ${dia} de ${meses[0]} de ${ano} ${hrr}:${min}</h1>` 

        case 1:
            return h1.innerHTML =  `<h1>${DiasDaSemana[1]}, ${dia} de ${meses[1]} de ${ano} ${hrr}:${min}</h1>` 
        
        case 2:   
            return h1.innerHTML =  `<h1>${DiasDaSemana[2]}, ${dia} de ${meses[2]} de ${ano} ${hrr}:${min}</h1>` 

        case 3:
            return h1.innerHTML =  `<h1>${DiasDaSemana[3]}, ${dia} de ${meses[3]} de ${ano} ${hrr}:${min}</h1>` 

        case 4:
            return h1.innerHTML =  `<h1>${DiasDaSemana[4]}, ${dia} de ${meses[4]} de ${ano} ${hrr}:${min}</h1>`

        case 5:
            return h1.innerHTML =  `<h1>${DiasDaSemana[5]}, ${dia} de ${meses[5]} de${ano} ${hrr}:${min}</h1>`

        case 6:
            return h1.innerHTML =  `<h1>${DiasDaSemana[6]}, ${dia} de ${meses[6]} de ${ano} ${hrr}:${min}</h1>`

        case 7:
            return h1.innerHTML =  `<h1>${DiasDaSemana[0]}, ${dia} de ${meses[7]} de ${ano} ${hrr}:${min}</h1>` 

        case 8:
            return h1.innerHTML =  `<h1>${DiasDaSemana[1]}, ${dia} de ${meses[8]} de ${ano} ${hrr}:${min}</h1>` 

        case 9:
            return h1.innerHTML =  `<h1>${DiasDaSemana[2]}, ${dia} de ${meses[9]} de ${ano} ${hrr}:${min}</h1>` 

        case 10:
            return h1.innerHTML =  `<h1>${DiasDaSemana[3]}, ${dia} de ${meses[10]} de ${ano} ${hrr}:${min}</h1>`

        case 11:
            return h1.innerHTML =  `<h1>${DiasDaSemana[4]}, ${dia} de ${meses[11]} de ${ano} ${hrr}:${min}</h1>` 

        case 12:
            return h1.innerHTML =  `<h1>${DiasDaSemana[5]}, ${dia} de ${meses[0]} de ${ano} ${hrr}:${min}</h1>` 

        case 13:
            return h1.innerHTML = `<h1>${DiasDaSemana[6]}, ${dia} de ${meses[1]} de ${ano}${hrr}:${min}</h1>` 
        
    
        default:
            console.log('nana')
    }
}


mostrarData(diaSemana, dia, ano, hrr, min)
