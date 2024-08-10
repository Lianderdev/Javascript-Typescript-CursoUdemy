// Toda função assícrona em js restorna uma Promise!

/*
com then 

const getUserInfo = id => {
    const data = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resolve => {
           return resolve.json()
        })
        .then(resolve => {
          console.log(resolve)
        })
} */

// Com Async e Await

const getUserInfo = async (id) => {
    try {
        const resolve = await fetch(`https://jjsonplaceholder.typicode.com/users/${id}`)
        const data = await resolve.json()
        console.log(data)
    } catch(e) {
        consoele.err(e, 'serio isso !')
    }

}

getUserInfo(1)