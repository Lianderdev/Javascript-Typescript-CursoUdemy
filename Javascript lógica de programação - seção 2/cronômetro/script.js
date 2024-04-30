function relogio(){
    const relogio = document.querySelector('.relogio')
    const botao_iniciar = document.querySelector('.btn-iniciar')
    const botao_pausar = document.querySelector('.btn-pausar')
    const botao_zerar = document.querySelector('.btn-zerar')

    function criarData (segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        } )
    }

    let segundos = 0
    let timer;
    function iniciarRelogio(){
        timer = setInterval(() => {
            segundos++
            relogio.textContent = criarData(segundos)
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const elemento = e.target
        
        if (elemento.classList.contains('btn-iniciar')) {
            clearInterval(timer)
            iniciarRelogio()
            relogio.style.color = '#333333'
        }

        if (elemento.classList.contains('btn-pausar')) {
            clearInterval(timer)
            relogio.style.color = 'red'
        }

        if (elemento.classList.contains('btn-zerar')) {
            clearInterval(timer)
            segundos = 0
            relogio.textContent = '00:00:00'
            relogio.style.color = 'blue'
        }
    })
}

relogio()

