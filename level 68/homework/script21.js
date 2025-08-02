// 21) შექმენით ორი ობიექტი, თქვენი დავალებაა რომ ეს ობიექტები აიღოთ და გააერთიანოთ ერთ ობიექტში (მოიძიეთ ინფორმაცია)


const person1 ={
    name: "nika",
    lastname: 'kvelashvili',
    age: 15
}

const person2 ={
    name: "ilia",
    lastname: 'topuria',
    
}

const merged = {...person1,...person2}
console.log(merged)