// 1) შექმენით Rock Paper Scissors პროექტი (შეგიძლიათ მოიძიოთ ინფორმაციაც), გაიაზრეთ კოდი

let tools = ['rock','paper','scisors'];



 let button = document.getElementById("btn")


 let p = document.getElementById("P")


function game () {

    let random = Math.floor(Math.random()*tools.length)
    
    let randomIndex = tools[random];

    p.textContent = randomIndex
    
    
}

let result = game();
console.log(result)


    p.textContent = result

button.addEventListener("click",game)


