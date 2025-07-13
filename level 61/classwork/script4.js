// 4) შექმენით ფუნქცია სახელად filter, ფუნქციას ექნება ერთიუ პარამეტრი სახელად numbers, ეს პარამეტრი მიიიღებს რიცხვების მასივს, ფუნქციაში შექმენით თავიდან ერთი ცარიელი მასივი სახელად filteredArr რომელშიც დაამატებთ მხოლოდ იმ რიცხვებს რომლებიც იყოფა ნულზე, გამოიყენეთ  for ციკლი ამისათვის, საბოლოოდ როცა დაამატებთ ყვბელა ლუწ რიცხვს დააბრუნეთ ფუნქციიდან return იტ და დაბეჭდეთ დაბრუნებული მასივი

function filter(numbers) {
  let filteredArr = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      filteredArr.push(numbers[i])
    }
  }

  return evenNumbers; 
}

let evenNumbers = [2, 3, 4, 5, 6, 7, 9, 11, 20]

console.log(evenNumbers)