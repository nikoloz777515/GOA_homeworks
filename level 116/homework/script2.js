const secret = 7


process.stdout.write("please enter a number: ")
process.stdin.on("data",(input)=>{
    if(input === secret){
        console.log("this is right")
    }
    else if(input > secret){
        console.log("Too high")
    }
    else if(input < secret){
        console.log("Too Low") 
    }
    else{
        console.log("correct")
        process.exit()
    }
})

// 3) მომხმარებელმა უნდა გამოიცნოს თქვენს მიერ ჩაფიქრებული რიცხვი, თუ მომხმარებელმა შემოიტანა ისეთი რიცხვი რომელიც ჩაფიქრებულ რიცხვზე დიდია გამოიტანეთ ტექსტი 'Too high!' თუ რიცხვი ჩაფიქრებულ რიცხვზე ნაკლებია გამოიტანეთ ტექსტი 'Too Low!' სხვა შემთხვევაში კი გამოიტანეთ ტექსტი 'Correct!' და გათიშეთ პროგრამა
