// 5) გამოიყენეთ Writeable Streams - იმისათვის, რომ ფაილში შეინახოთ რიცხები 1 - დან 50 - ის ჩათვლით

const fs = require("fs")
const readline = require("readline")

const WritesStream = fs.createWriteStream("numbers.txt")

for(let i = 1; i <= 50; i++){
        WritesStream.write(i.toString() + "\n")
}


WritesStream.on("finish",()=>{
    console.log("რიცხვები ჩაიწერა!")
})