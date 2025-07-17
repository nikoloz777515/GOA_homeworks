// 1) შეწქმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების მასივი, თქვენი დავალებაა for ციკლის მიშვეოპბით ბოლოდან გადაუაროთ მასივს

// მაგ: საწყისი ინდექსი 5

let numbers = [1,2,3,4,5,6,7,8,9,10,11]

function array (reverse) {
    for(let i =  numbers.length -1; i >= 0; i --){
         console.log(reverse[i])
    }
}

console.log(array(numbers))