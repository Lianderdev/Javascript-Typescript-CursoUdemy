const content = document.querySelector('.content')

async function fetchApi() {
    const response = await fetch('pessoas.json')
    const data = await response.json()
    return data
}

const build_result = async () => {
    const result = await fetchApi()
    
    Object.values(result).forEach((value) => {
        const p = document.createElement('p')
        p.innerHTML = `Nome: ${value.nome} / Gmail:${value.email}`
        content.appendChild(p)
    })

}


build_result()

