function mostrarElemento (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

mostrarElemento([1, 2, 5, 4, 8], function (elemento) {
    console.log(elemento)
})