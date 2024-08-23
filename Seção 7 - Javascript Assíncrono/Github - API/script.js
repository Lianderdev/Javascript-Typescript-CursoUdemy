const button_search = document.querySelector('.search')
const users = document.querySelector('.users')
const content = document.querySelector('.content')

async function fetchApi(users) {
    const response = await fetch(`https://api.github.com/users/${users}`)
    const data = response.json()
    return data
}



const build_result = (details) => {
    const keys = ['id', 'login', 'html_url', 'name', 'bio']

    return Object.entries(details).map(([chave, values]) => {
        if (chave === keys[keys.indexOf(chave)]) {
            const p = document.createElement('p')
            p.innerHTML = `${chave}: ${values}`
            content.appendChild(p)
            console.log(keys[keys.indexOf(chave)])
        }
    })
}



button_search.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchApi(users.value)
    build_result(result)
})