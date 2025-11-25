// 2) შექმენით text.txt ფაილი სადაც შეინახავთ სახელებს, თქვენი დავალებაა, რომ დაბეჭდოთ მხოლოდ იმ ფაილის ხაზები რომელებიც უდრის თქვენს სახელს

const fs = require("fs")
const readline = require("readline")


const Myname = "Nikolozi"


const rl = readline.createInterface({
    input: fs.createReadStream("text.txt")
})

rl.on("line",line =>{
    if(line === Myname){
        console.log(Myname)
    }
})















