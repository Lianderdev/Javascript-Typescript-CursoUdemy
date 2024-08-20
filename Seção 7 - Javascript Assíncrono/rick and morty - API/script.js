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
        .map((elem) => {
            if (elem.checked && typeof (result[elem.name]) !== 'object') {
                const p = document.createElement('p')
                p.innerHTML = `${elem.name}: ${result[elem.name]}`
                content.appendChild(p)
            }
        })
}


button.addEventListener('click', async (event) => {
    event.preventDefault()

    if (character.value === '') {
        return content.innerHTML = 'pfv - escolha um id'
    }

    const result = await fetchApi(character.value)

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
