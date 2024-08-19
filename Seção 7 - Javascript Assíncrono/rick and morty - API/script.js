// Consumindo a (API) do rick and morty

const character = document.getElementById('characterId')
const botao = document.getElementById('go')
const content = document.getElementById('content')
const img = document.getElementById('img')

const url = 'https://rickandmortyapi.com/api/character'

async function fetchApi(value){
    const response = await fetch(`${url}/${value}`)
    const data = await response.json()
    console.log(data)
    return data
}

const ep = []

botao.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchApi(character.value)
    content.textContent = `${JSON.stringify(result, undefined, 2)}`
    img.src = result.image
    ep.push(result.episode)
    ep.map((ep) => {
        console.log(ep)
    })
})
