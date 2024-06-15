const numeroPrimo = number => {
    let arr = []
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            arr.push(number)
        }
    }

    if (arr.length == 2) {
        console.log(`${number} é um numero primo`)
    } else {
        console.log(`${number} não é um numero primo`)
    }
}

numeroPrimo(11)