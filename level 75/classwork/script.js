//  1) შექმენით ფუნქცია რომელიც დააბრუნებს დაპირებას execution ფუნქციაში resolve გამოიძახეთ 5 წამის შემდეგ და გადაეცით რაიმე სტრინგი, შემდეგ გამოიძახეთ შექმენილი ფუნქცია და გამოიყენეთ then მეთოდი რომ წარმატებით დასრულების შემდეგ დაბრუნებული მნიშვნელობა დაბეჭდოთ კონსოლში


function execution (){
    let res = new Promise((resolve,reject) =>{
        let str = "hello"

    if(str.length > 4){
        resolve("string length is more than 4!")
    }
    })
return res
}

execution()
.then(res =>{
    console.log(res)
})