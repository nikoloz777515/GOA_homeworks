//  4) მომხმარებელს შემოატანინეთ სიტყვა, დააბრუნეთ მოცემული ტექსტის შემობრუნებული ვერსია

process.stdout.write("please enter something: ")
process.stdin.on("data",(value)=>{
        text = value.toString()
    const reversed = text.split("").reverse().join("")
    console.log(reversed)
    process.exit
})