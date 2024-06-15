const intersecao = (arr1, arr2) => {
    let arrIntersecao = []

        for (let i in arr1) {
            for (let j in arr2) {
                if ( arr1[i] == arr2[j]) {
                    arrIntersecao.push(arr1[i])
                }
            }
        }
        return arrIntersecao
}

console.log(intersecao([1, 2, 3, 5], [3, 2, 5, 1, 8, 9, 5]))