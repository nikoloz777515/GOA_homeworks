//  5) შექმენით Promise - ი, მასში კი ერთი ცვლადი სადაც შეინახავთ თქვენს ასაკს შეამოწმეთ თუ ასაკი მეტია ან ტოლი 18 - ის გამოიძახეთ resolve ფუნქცია და დააბრუნეთ 'You are adult' სხვა შემთხვევაში კი 'You are not an adult' 


let  prm = new Promise((resolve,reject) =>{
    let Myage = 15;
    if(Myage >= 18){
        resolve('You are adult')
    }else{
        reject('You are not an adult' )
    }
})

prm.then(adult =>{
    console.log(adult)
})

.catch(ynt =>{
    console.log(ynt)
})