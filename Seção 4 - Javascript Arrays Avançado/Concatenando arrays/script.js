//Concatenando Arrays


//maneira 1
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2)
console.log(a3)

//maneira 2 <- ... spread
const a = [...a1, ...a2, [100, 200], ...[300, 400], 'spread']
console.log(a)
