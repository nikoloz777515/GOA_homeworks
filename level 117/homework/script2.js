// 3) კარგად გაიაზრეთ fs module - ი, შექმენით ფაილი სადაც შეინახავთ დიდ ინფორმაციას, გამოიყენეთ Readable stream - იმისათვის, რომ დაითვალოთ ფაილში არსებული ხაზების რაოდენობა
const fs = require("fs")
const readline = require("readline")

let count = 0

const rl = readline.createInterface({
    input: fs.createReadStream("texts.txt")
})

rl.on("line",()=>{
     count++
   
})

rl.on("close", ()=>{
    console.log("ხაზების რაოდენობაა: ", count)
})