const promise = new Promise(resolve => {
    resolve()
})

promise.then(() => {
    console.log(2)
}).then(() => {
    console.log(1)
})

setTimeout(() => {
    console.log(3)
}, 500)

setTimeout(() => {
    console.log(4)
})


console.log(5)