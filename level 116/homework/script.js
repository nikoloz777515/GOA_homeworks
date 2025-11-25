// process.stdin/stdout

// 2) მომხმარებელს იქამდე შემოატანინეთ რაიმე სიტყვა სანამ ის არ ჩაწერს exit, თუ მომხმარებლის მიერ შემოტანილი მნიშვნელობა უდრის exit - ს მაშინ გათიშეთ პროგრამა


process.stdout.write("please enter special word: ")

process.stdin.on("data",(input)=>{
    const value = input.toString().trim()

    if(value === "exit"){
        console.log("program is exited")
        process.exit()
    }else{
        console.log("you entered:", value)
        process.stdout.write("please enter a word again ")
    }
})




















