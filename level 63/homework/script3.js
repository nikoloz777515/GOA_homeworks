// 3) შექმენით arrow function მას უნდა გადასცეთ ერთი პარამეტრი რომელიც იქნება მასივი ეს მასივი უნდა შედგებოდეს 3 რიცხვისგან თქვენმა ფუნქციამ უნდა გამოითვალოს ამ მასივში არსებული რიცხვების საშუალო არითმეტიკული


let num = [11,8.99,99]

let sum = 0

let arrow = (ctn) => {
    for(let i = 0; i< ctn.length; i++){
        sum+=ctn[i]
    }
}

arrow(num)

let average = sum / num.length

console.log(Math.floor(average))