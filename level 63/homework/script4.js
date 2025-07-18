// 4) შექმენით ერთი ფუნქცია რომელიც იღებს ერთ პარამეტრს სახელად password თქვენმა უნქციამ უნდა შეამოწმოს იმ შემთხვევაში თუ password - ის სიგრძე არის 6 - სიმბოლოზე ნაკლები მაშინ დააბრუნეთ რომ 'Password is Too Short Try again', იმ შემთხვევაში თუ password შეიცავს რიცხვებაც და ასოებსაც მაშინ დააბრუნეთ რომ 'Password Is strong', სხვა შემთხვევაში კი დააბრუნეთ, რომ 'The Password Must Contain numbers and letters and it should be at least 6 characters long', გამოიყენეთ for loop - ი იმისთვის რომ გადაუაროთ გადმოცემულ პარამეტრს და შეამოწმოთ შეიცავს თუ არა password პარამეტრის რომელიღაცა სიმბოლო ასოს ან რიცხვს

let password = 'n445@gg'



function cheeck (pass){

    let hasLetter = false
    let hasNumber = false
    let hasSymbol = false

    let symbols = "!@#$%&*"


    if(password.length <= 6){
        console.log( 'Password is Too Short Try again')
    }



for(let i = 0; i < pass.length; i++){
    let char = pass[i]

    if((char >= 'a' && char <= 'z')){
        hasLetter = true
    }   else if(char >= '0' && char <='9'){
        hasNumber = true
    }else if(symbols.includes(char)){
        hasSymbol = true
    }
}

if(hasLetter && hasNumber && hasSymbol){
    console.log('password is strong')
}else{
    console.log(' Password must contain letters, numbers and symbols')
}
}


cheeck(password)

