
const fs = require("fs")

process.stdout.write("please enter information: ")

process.stdin.on("data",(input)=>{
    const value = input.toString().trim()

    if(!isNaN(value)){
        throw new Error("not allowed to enter a number")
    }
    else{
        fs.appendFile("res.txt", value + "\n" ,(err)=>{
           if(err){
             console.log(err)
           }
           else console.log("text added sucesfully")
        })
    }
    // process.exit()
})


// 1) გამოიყენეთ stdin ტერმინალიდან ინფორმაციის შემოსატანად, როგორც მოგეხსენებატ ტერმინალიდან შემოტანილი ინფორმაცია არის ორობით ფორმატში ანუ Buffer ობიექტის სახით, გამოიყენეთ შესაბამისიმეთოდი რომ გარდაქმნათ სტრინგად, თუ მომხმარებელი შემოიტანს რიცხვს გამოუყენეთ Error კლასი რომ გამოიწვიოთ ერრორი throw ოპერატორის გამოყენებით (ერრორი: არ შეიძლება რიცხვის შემოტანა) თუ ის იქნება ჩვეულებრივი სტრინგი ციფრების გარეშე მაშინ დაამატეთ ფაილში სახელად resul