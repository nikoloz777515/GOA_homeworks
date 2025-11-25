// 4) შექმენით ფაილი, შეინახეთ მასში დიდი ინფორმაცია, თქვენი დავალებაა, რომ გათიშოთ პროგრამა მაშინ როდესაც ფაილში არსებული ხაზების რაოდენობა გაუტოლდება 10


const fs = require("fs")
const readline = require("readline")



let lineCounter = 0


const rl = readline.createInterface({
    input: fs.createReadStream("texts.txt")
})

rl.on("line",()=>{
    lineCounter++ 
})

rl.on("line", ()=>{
    if(lineCounter === 10){
        console.log(" ხაზების რაოდენობა უკვე უდრის 10 და მორჩა პროგრამა")
    }
    
})
