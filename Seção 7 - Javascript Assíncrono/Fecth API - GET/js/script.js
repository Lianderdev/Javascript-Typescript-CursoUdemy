// Fecth api (get) -> utilizado para fazer requisições assíncronas
// O fecth retorna por padrão uma promise

// Trabalhando nos posts de carregamento da home
// Resgatando dados de uma url


// URL da api
const url = 'https://jsonplaceholder.typicode.com/posts'

const loadingELement = document.getElementById('loading')
const postsContainer = document.getElementById('posts-container')

// Função para pegar todos os posts
async function getAllPosts() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    loadingELement.classList.add('hide')
    data.map((post) => {
        const div = document.createElement('div')
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const link = document.createElement('a')

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = 'ler'
        link.setAttribute("href", `/post.html?id=${post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

getAllPosts()