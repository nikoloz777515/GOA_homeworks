// 1) შექმენით ფაილი სახელად functions.js სადაც თქვენ გექნებათ რაიმე ფუნქციები მაგალითად greetUser, guessNumber etc. ეს ფუნქციები დაა - export - ეთ და გამოიყენეთ თქვენს მთავარ ფაილში
// // package.json - ის ფაილში "type" ს მიანიჭეთ შესაბამისი მნიშვნელობა


function greetUser (usr){
    return `hello ${usr}`
}

function guessNumber (secr,usrnum){
    if(usrnum === secr){
        return "you sucesfully guess num"
    }
    else{
        return "your number is wrong!"
    }
}

module.exports = {greetUser,guessNumber}