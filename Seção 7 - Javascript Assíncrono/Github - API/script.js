const button_search = document.querySelector('.search')
const users = document.querySelector('.users')
const content = document.querySelector('.content')

async function fetchApi(users) {
    const response = await fetch(`https://api.github.com/users/${users}`)
    const data = response.json()
    return data
}

const build_result = (result) => {
    return result.map((props) => {
        const name = document.createElement('p')
        name.innerHTML = props
        content.appendChild(name)
    })
}


button_search.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchApi(users.value)
    build_result(Object.values(result))
})