// 4) შექმენით ერთი Promise - ი მას უნდა გადაეცეს ორი ფუნქცია resolve, reject, შექმენით ერთი ცვლადი სახელად orderReady რომელიც ინახავს boolean მნიშვნელობას ან true - ს ან false, თუ შექმნილ ცვლადში არსებული მნიშვნელობა true - ა მაშინ გამოიძახეთ resolve ფუნქცია და დააბრუნეთ 'Your order is ready' სხვა შემთხვევაში კი 'Your order got declined'


let prom = new Promise((resolve,reject) =>{
    let orderReady = true 

    if(orderReady === true){
        resolve('your order is ready')
    }
    else{
        reject('your order got declined')
    }
})
prom.then(yrd =>{
    console.log(yrd)
}).catch(yod =>{
    console.log(yod)
})

