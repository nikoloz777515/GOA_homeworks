// 3) კომენტარების სახით ახსენით თუ რა არის Promise - ები, რა არის fetch - ი და რაში ვიყენებთ ჩვენ მას, თქვენი სიტყვებით ახსენით თუ რა არის server, Promise - ებზე და fetch - ზე გააკეთეთ რამოდენიმე დავალება 


//promise ები არის დაპირებები აქვს სამი რამ resolved rejected pending თუ დაპირება შესრულდა გამოგვაქვს resolved თუარშესრულდა გამოგვაქ rejected და თუ დაპირება პროცესშია გამოგვაქვს pending

//fetch ის მეშვეობით ჩვენ ვაგზავნით მოთხოვნას სხვა სერვერთან გარკვეულ ინფორმაციაზე და ა.შ

// server არის კომპიტერი რომელიცაა ჩრთული 24 საათი და მასზე ჩენს თითქმის სულ ვაგზავნით მოთხოვნებს



let myPrm = new Promise((resolved,rejected) =>{
        let sucses = false
    
    if(sucses === true){
       resolved(`this is resolved cause it is ${sucses}`)
    }
    else{ rejected(`this is rejected cause it is ${sucses}`)
    }
})

myPrm.then(res => console.log(res))
.catch(bd => console.log(bd))







let age = new Promise((resolved,reject) =>{
    let prmp = prompt("enter your age")
    if(prmp > 18){
        resolved("your are an adult")
    }
    else{
        reject("you are children")
    }
})

age.
then(resu => console.log(resu))
.catch(ch => console.log(ch))







fetch('https://fakestoreapi.com/products')

.then(res => res.json())
.then(dt => console.log(dt))
.catch(er => console.log("wrong",er))





fetch('https://api.escuelajs.co/api/v1/products')
.then(st => st.json())
.then(data => console.log("data",data))

.catch(err => console.log("erorr",err))