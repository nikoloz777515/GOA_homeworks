// 2) ბევრი ივარჯიშეთ fetch, async/await, try/catch - ზე დაწერილი კოდი კი ახსენით დეტალურად კომენტარების სახით


// // აქ შვქმენი arrow ფუნქცია სახელად myF და მას გადავეცი  async რადგან ფუქცია გახდეს ასინქნორული
 const myF = async () =>{
     // აქ შევქმენი  try ბლოკი და მასში ჩავწერე კოდი
    try{
//         // აქ შევქმენი ცვლადი სახელად ftch და მასში შევინახე fetch ანუ გავაგზავნე მოთხოვნა სერვერთან და წინ დავუწერე await რადგან ის გააჩერებს ფუნქციას იქამდე სანამ promise არდამთავრდება
        let ftch = await fetch('https://api.escuelajs.co/api/v1/users')

//         // აქ შევქმენი ცვლადი სახელად jsn და მასში შევინახე fetch json() ფორმატში რათ გამოიტანოს დალაგებულად და კარგად json ფორმატმა და ასევე გავუწერე await
       let jsn = await ftch.json()

        // აქ კი კონსოლში დავაბეჭნიდე ეგტმონაცემები და ვნახე ყველაფერი სწორედ თუ შეასრულა
         console.log(jsn)


//         // აქ მოვიპოვე წვდომა ჩემს html'ს ul ელემენტზე id მეშვეობით
         let ul = document.getElementById("ul")

//         // აქ კი გამოვიყენე მეთოდი foreach()  იმ ცვლადზე სადაც json ფორმატში შევინახე მონაცემები forach'ს პარამეტრად გადავეცი el aნუ ყოველ ინტერაციაზე ეგ el გახდება ის ელემეტი რაც fetch ით მოვითხოვე
         jsn.forEach(el => {
             //აქ inerHTML შევცვალე და გავუწერე რომ გამოეტანა პარაგრაფის ფორმატში el.email ანუ el იდან უნდა ამეღო ემაილი და ეს რომ გამეორებულიყო იმდენჯერ რამდენი ელემენტიც იყო გავუწერე += ასე რომ ყოველ ინტერაციაზე გამოტანდა სათითაო ელემენტს
             ul.innerHTML += `<p> ${el.email}</p>
             <p> ${el.password}</p>`
         });

//         // აქ catch გამოვიყენე error ების სამართავად
     }catch(err){
//         // და აქ  გავუწერე რომ რამე თუარასწორედ შესრულდა ერორის ფორმატში გამოუტანდა მესიჯს კონსოლში
         console.error("this is error",err)
    }
 }

// // აქ კი გამოვიძახე ფუნქცია რომ მივიღო საბოლოო შედეგები
 myF()




const func2 = async() =>{
    try{
         let f = await fetch('https://api.escuelajs.co/api/v1/products')
    let jsni = await f.json()
    console.log(jsni)


     jsni.forEach(el =>{
        let ul = document.getElementById("ul")
        ul.innerHTML += `
        <li> 

        <p>${el.title}</p>
        <p>${el.slug}</p>
        <p>${el.description}</p>
        <p>${el.price} $</p>
        <img src = "${el.image}" />
        
        </li>`
    })
    } catch(err){
        console.log("erorr",err)
    }
}

func2()