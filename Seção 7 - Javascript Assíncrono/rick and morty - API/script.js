// Consumindo a (API) do rick and morty

const character = document.getElementById('characterId')
const button = document.getElementById('go')
const reset = document.getElementById('reset')
const content = document.getElementById('content')
const img = document.getElementById('img')

const url = 'https://rickandmortyapi.com/api/character'

async function fetchApi(value) {
    const response = await fetch(`${url}/${value}`)
    const data = await response.json()
    return data
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode']

const buildResult = (result) => {
    return keys.map((key) => document.getElementById(key))
    .map((elemento) => {
        
        if (elemento.checked === true && elemento.name === 'origin') {
            const p = document.createElement('p')
            p.innerHTML = `${result[elemento.name].name}`
            content.appendChild(p)
        } else if (elemento.checked === true && (Array.isArray(result[elemento.name]))){
            const array = result[elemento.name].join('\r\n')
            const p = document.createElement('p')
            p.innerHTML = `${elemento.name}: ${array}`
            content.appendChild(p)
        } else if (elemento.checked === true && (typeof(result[elemento.name] !== 'object'))) {
            const p = document.createElement('p')
            p.innerHTML = `${elemento.name}: ${result[elemento.name]}`
            content.appendChild(p)
            console.log(p)
        }
    })
}


button.addEventListener('click', async (event) => {
    event.preventDefault()

    if (character.value === '') {
        return content.innerHTML = 'pfv - escolha um id'
    }

    const result = await fetchApi(character.value)
    console.log(result)

    if(content.firstChild === null) {
        buildResult(result)
        img.src = result.image
    } else {
        content.innerHTML = ''
        buildResult(result)
        img.src = result.image
    }
})

reset.addEventListener('click', () => {
    content.textContent = ''
    img.src = ''
})
