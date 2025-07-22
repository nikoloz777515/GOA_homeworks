// 2) შექმენით ფუნქცია რომელიც აბრუნებს ფუნქციის მნიშვნელობა, გამოიძახეთ დაბრუნებული ფუნქცია და ნახეთ როგორ იმუშავებს კოდი
// NEW
// NEW


function result (neww){
    console.log("New")
    neww()
    
}
function greet (){
    console.log("hello")
}


const newResult = result

console.log(newResult)

newResult(greet)