// 3) შექმენით ერთი Promise - ი მას უნდა გადაეცეს ორი ფუნქცია resolve, reject, თქვენი დავალებაა რომ შექმნათ ერთი ცვალი სადაც შეინახავთ random რიცხვს ერთიდან 10 - ის ჩათვლით, შეამოწმეთ თუ random რიცხვი მეტია 3 - ზე მაშინ გამოიძახეთ resolve - ი და გადაეცით მნიშვნელობა `${randomNum} is more than 3` სხვა შმთხვევაში კი გამოიძახეთ reject - ი და დააბრუნეთ მნიშვნელობა `${randomNum} should be more than 3`


let p = new Promise((resolve,reject) =>{

let randomNum = Math.floor(Math.random()*10 + 1)


    if(randomNum > 3){
      resolve( `${randomNum} is more than 3`)
    }
    else{
       reject( `${randomNum} should be more than 3`)
    }

})

p.then(result =>{
    console.log(result);
}).catch(eror =>{
    console.log(eror)
})