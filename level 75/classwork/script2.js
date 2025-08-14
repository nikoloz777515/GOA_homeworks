// 2) იგივე დავალება ამ შემთხვევაში უბრალოდ გამოიძახეთ reject და უარყოფილი დაპირების სამართაავად გამოიყენეთ catch მეთოდი


function execution (){
    let res = new Promise((resolve,reject) =>{
        let str = "hello"

    if(str.length < 4){
        resolve("string length is more than 4!")
    }else{
        
        reject("string length is less than 4!")
    }
    })
return res
}

execution()
.catch(res =>{
    console.log(res)
})