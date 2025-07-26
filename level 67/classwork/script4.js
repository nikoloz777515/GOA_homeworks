const reduce = (arr, cb, startingValue) => {
    let accumulator
    let startIndex

    if (startingValue === undefined) {
        accumulator = arr[0]
        startIndex = 1
    } else {
        accumulator = startingValue
        startIndex = 0
    }

    for(let i = startIndex; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i])
    }

    return accumulator
}

const numbers = [1, 2, 3, 4, 5]


console.log(sum)

