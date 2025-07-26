// 2) შექმენით findIndex მეთოდის კლონი
function manualFindIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return i
    }
  }
  return -1
}

let cars = ['corolla: year: 2017', 'f10: year: 2013', 'cls: year: 2012']

let index = manualFindIndex(cars, function(car) {
  return car.includes('2012')
})

console.log(index)



