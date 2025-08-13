// 3) შექმენით Promise უნდა გადაეცეს ორი ფუნქცია resolve, reject - მასში კი შექმენით ერთი ცვლადი სადაც შეინახავთ რაიმე რიცხვს შეამოწმეთ თუ რიცხვი არის ლუწი გამოიძახეთ resolve - ფუნქცია და გადაეცით მნიშვნელობა "The Number is even" სხვა შემთხვევაში კი "The Number is odd"


let prom = new Promise((resolve,reject) =>{
    const myNum = 99988;

    if(myNum % 2 === 0){
        resolve("The Number is even")
    }else{
        resolve("The Number is odd")
    }
})

prom.then(ev => console.log(ev))

.catch(od => console.log(od))