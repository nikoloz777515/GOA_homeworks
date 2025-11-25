


const fs = require("fs")

process.stdout.write("Enter command (add/show/clear/exit): ")
process.stdin.on("data",(input)=>{
    const cmd = input.toString().trim
    if(cmd === "add"){
        fs.appendFileSync("text.txt","text/n")
        console.log("text is added")
    }
    else if(cmd === "show"){
        fs.existsSync("text.txt")
        const data = fs.readFile("text.txt", "utf8")
        console.log("File content:\n" + data);
    }else {
            console.log("File not found.");
        }
})
// fs module process.stdin

// 5) მომხმარებელს შემოატანინეთ ტექსტი, თუ მომხმარებელმა შემოიტანა მნიშვნელობა add Text, მაშინ დაამატეთ სიტყვა text.txt ფაილშ, თუ მომხმარებელმა შემოიტანა მნიშვნელობა show მაშინ გამოიტანეთ text.txt ფაილის შეგთავსი, თუ შემოიტანა მნიშვნელობა clear მაშინ text.txt ფაილში ავტომატურად უნდა წაიშალოს მასში არსებული შიგთავსი, თუ მან შემოიტანა მნიშვნელობა exit მაშინ გათიშეთ თქვენი პროგრამა