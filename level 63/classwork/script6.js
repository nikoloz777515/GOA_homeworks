// 6) შექმენით arrow ფუნქცია რომელსაც გადაეცემა ორი პარამეტრი, მასივი და რიცხვი, თქვენი დავალებაა გადაუაროთ მასივს და ის რიცცხვები დაამატოთ ახალ მასივში რომელიც გადმოცემულ რიცხვს არ უდრის, საბოლოოდ დააბრუნეთ ახალი მასივი (გამოიყენეთ arrow ფუნქცია)


const filterArray = (arr, num) => {
  let Newarr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      Newarr.push(arr[i])
    }
  }
  return Newarr
}
console.log(filterArray([1, 2, 3, 4, 2, 5], 2))