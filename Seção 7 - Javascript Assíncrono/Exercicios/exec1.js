const first = () => {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved('first')
        }, 1000)
    })
}

const second = () => {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved('second')
        }, 2000)
    })
}

first()
    .then(resolve => {
        console.log(resolve)
        return second()
    })
    .then(resolve => {
        console.log(resolve)
    })