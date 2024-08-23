async function fetchApi(users) {
    const response = await fetch(`https://api.github.com/users/${users}`)
    const data = response.json()
    return data
}

fetchApi('lianderDev').then((response => {
    console.log(Object.entries(response))
}))

