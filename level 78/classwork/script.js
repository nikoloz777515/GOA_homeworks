// 1) https://jsonplaceholder.typicode.com/users/1/posts ამ მისამართზე გააგზავნეთ მოთხოვნა ყველა ასიქნრონული ოპერაცია უნდა იმართებოდეს async await ტექნიკის გამოყენებით, კომენტარებით ახსენით რა არის async await და try catch, დამატებით მიღებული ინფორმაცია საიტზე გამოიტანეთ სიის ელემენტების სახით



const g = async () => {
    try{
        let a = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        let js = await a.json()
        console.log(js)


        let ul = document.getElementById("ul")

       

        js.forEach(rndr =>{

         ul.innerHTML = `<p>Description: ${rndr.title}<p> <br> <p>${rndr.body}</p>`
        })
        
    }catch(er){
        console.error("error",er)
    }
}

g()




// try catch არის eror ების სამართავად ანუ მას ვიყენებთ ერორების სამართავად

// async ხდის ფუნქიას  ასინქრონულს და await აჩერებს კოდის შესურლებას სანამ არშესრულდება promise
