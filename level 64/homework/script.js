// 1) შექმენით Rock Paper Scissors პროექტი (შეგიძლიათ მოიძიოთ ინფორმაციაც), გაიაზრეთ კოდი

function game (userChoice){
    let tools = ['rock','paper','scissories']

    


    let random = Math.floor(Math.random()*tools.length)

    let computerChoice = tools[random];

    let result = ""

    if(computerChoice === userChoice){
        result = "Draw"
    }else if(userChoice === 'rock' && computerChoice === 'paper' ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'scissories')
    ){
        result = 'you win'
    }else{
        result = 'you lost'
    }

    document.getElementById('resu').innerHTML =`you chose <b>${userChoice}</b> <br> 
    computer chose <b>${computerChoice}</b> <br>
    result <strong>${result}</strong  you screw }`
    
    
}