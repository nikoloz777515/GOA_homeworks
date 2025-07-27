// 14) ზემოთ მოცემულ ყველა მეთოდზე როგორიცაა findIndex, filter, map, reduce method - ები შექმენით მათი manual ფუნქციები

// findIndex-manual


// function manualFindIndex(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i)) {
//       return i
//     }
//   }
//   return -1
// }

// let cars = ['corolla: year: 2017', 'f10: year: 2013', 'cls: year: 2012']

// let index = manualFindIndex(cars, function(car) {
//   return car.includes('2012')
// })

// console.log(index)




// reduce-manual 


// const reduce = (arr, cb, startingValue) => {
//     let accumulator
//     let startIndex

//     if (startingValue === undefined) {
//         accumulator = arr[0]
//         startIndex = 1
//     } else {
//         accumulator = startingValue
//         startIndex = 0
//     }

//     for(let i = startIndex; i < arr.length; i++) {
//         accumulator = cb(accumulator, arr[i])
//     }

//     return accumulator
// }

// const numbers = [1, 2, 3, 4, 5]


// console.log(sum)
