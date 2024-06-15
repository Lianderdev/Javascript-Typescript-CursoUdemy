const removeFalse = arr => {
    
    for (let i of arr) {
       if (arr[i] === 'false' || arr[i] === 'null' || arr[i] === undefined || arr[i] === NaN || arr[i] === ''){
        console.log(arr.pop(arr[i]))
       }
    }

    return arr
}


console.log(removeFalse(['liander', false, null, 0, "", undefined, NaN, 2]))