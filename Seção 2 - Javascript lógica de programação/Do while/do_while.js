function randon(min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

let rand = randon(1, 50)

while (rand !== 10) {
    rand = randon(1, 50)
    console.log(rand)
}

console.log('**************')

let number = 10

do {
    console.log('6')
    
} while(number !== 10)