// 1) პირველრიგში ახსენით კომენატრებით რა განსხვავებაა  imperative და declarative პროგრამირების პარადიგმებს შორის თავისი გამალითებით, შემდეგ ახსენით event-driver პროგრამირება რას ნიშნავს.



//imperative ნიშნავს ნაბიჯ ნაბიჯ მითითბას როგორ უნდა შესრულდეს რაღაც
//declarative  კი ნიშნავს შედეგის გამოცხადებას  ვეუბნებით რა გვინდა და ის აკეთებს

// Event-driven არის მოვლენებზე დაფუძნებული პროგრამირება
// სადაც კოდი რეაგირებს კონკრეტულ მოვლენებზე ანუ events ებზე
// მაგალითად ღილაკზე დაჭერა, მოთხოვნის მიღება და ა.შ.



// 2) დააიმპორტეთ events მოდული, გამოიყენეთ EventEmmiter კლასი რომ შექმნათ ობიექტი,. შემდეგ მაგ ობიექტის დახმარებით მოუსმინეთ 2 მოვლენას პირველი მოვლენა იქნება sum მმართველ ფუნქციას გადაეცემა ორი რიცხვი, თქვენ უნდა დაბეჭდოთ რიცხვების ჯამი, მეორე მოვლენა თქვენი სურვილით შექმენით და გამოიწვიეთ (დაიმახსოვრეთ მოვლენის გამოწვევისას შეგიძლიათ თან გადასცეთ არგუმენტები ფუნქციებს)

// const { EventEmitter } = require("stream")

// const eventMit = require("events")

// const event = new EventEmitter()

// event.on("sum",(a,b)=>{
//     console.log("sum is",a+b)
// })

// event.on("greet" ,() =>{
//     console.log("welcome")
// })

// event.emit("sum", 10, 20);
// event.emit("greet")




// 3) შექმენით guess game, მოიფიქრეთ რაიმე შემთხვევითი რიცხვი, სანამ მომხმარებელი მაგ რიცხვს არ შემოიტანს იქამდე დაუბეჭდეთ რომ არასწორია და სცადოს თავიდან, აგრეთვე დაუბეჭდეთ მერამდენე მცდელობაა მისი, როცა შემოიტანს სწორ რიცხვს გათიშეთ პროგრამა 




// const readline = require("readline");
// const process = require("process")

// const rld = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const randomNumber = Math.floor(Math.random() * 10)

// let attempt = 0
// function ask() {
//     rld.question("enter a number 1 to 10: ", (input) => {
//         attempt++
//         const guess = Number(input);

//         if (guess === randomNumber) {
//             console.log(` right answer on ${attempt} attempt`);
//             process.exit() 
//         } else {
//             console.log(` wrong number try agan: ${attempt}`);
//             ask()
//         }
//     }  )
// }
// ask()


// 4) fs მოდულის დახმარებით, შექმენით პროგრამა, სადაც მოხმარებელს შემოაქვს ინფორმაცია თქვენი 
// დავალება ეგ ინფორმაცია თან დაამატოთ ტექსტურ ფაილში

const fs = require("fs")
const readline = require("readline")

rld = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rld.question("enter information", (input) =>{
    fs.appendFile("data.txt",input + "\n", err =>{
        if (err) {
            console.log("შეცდომა ", err);
        } else {
            console.log("ინფორმაცია  დაემატა ფაილში data.txt");
        }
        process.exit();
    })
})
