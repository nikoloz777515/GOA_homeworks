// 3) გააკეთეთ promise - ებზე 2 მაგლითი, ასევე ახსენით კოდი კომენტარების სახით


let promi = new Promise((resolve,reject) =>{
    if(5 > 4){
        resolve("5 is grather than 4")
    }else{
        reject("eror")
    }
})

promi.then(th => console.log(th))
.catch(cth => console.log(cth))



let prom = new Promise((resolve,reject) =>{
    let myStr = "Hello"

        if(myStr.length > 4){
            resolve("your array has more length than 4!")
        }else{
            reject("your array has less length than 4!!")
        }
})

prom.then(lng => console.log(lng))
.catch(ct => console.log(ct))