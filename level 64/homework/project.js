// 1) შექმენით Rock Paper Scissors პროექტი (შეგიძლიათ მოიძიოთ ინფორმაციაც), გაიაზრეთ კოდი

let you = 0
let computer = 0

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
        you++
        
    }else{
        result = 'you lost'
        computer++
        
    }

    


    document.getElementById('resu').innerHTML =`you chose <b>${userChoice}</b> <br> 
    computer chose <b>${computerChoice}</b> <br>
    <u>result: <strong>${result}</strong></u> <br><br> <b> your score is: ${you};<br> </b>  <b> computer score is: ${computer}; </b>`;
    
    
}