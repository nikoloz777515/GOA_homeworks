// გააგზავნეთ ამ https://fakestoreapi.com/products ლინკზე მოთხოვნა, async await - ის გამოყენებით





const func = async () =>{
    try{
        let a = await fetch('https://fakestoreapi.com/products')
        let js = await a.json()
    console.log(js)
    }catch(err){
        console.log("this is erorr",err)
    }
}

func()



//კომენტარების სახით ახსენით თუ რა არის try, catch, async, await


// try ში ვსვავთ კოდის ბლოკს და ვეცდებით რომ უშეცოდოდმოთ იმუშაოს ჩვენმა კოდმა და თუ შეცდომა იყო გაეშვება catch 

// async ხდის კოდ ასინქნორულს

// catch ვიყენებთ ერორებსი სამართავად

// await აჩერებს ფუნქციას სანამ promise არდამთავრდება