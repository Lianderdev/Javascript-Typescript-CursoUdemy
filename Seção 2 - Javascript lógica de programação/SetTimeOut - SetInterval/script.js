function dataSet(){
    const data = new Date()
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(dataSet())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
}, 3000)