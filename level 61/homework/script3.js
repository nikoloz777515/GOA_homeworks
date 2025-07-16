//  3) შექმენით ერთი მასივი შეინახეთ მასში ხილის სახეობები მაგალითად [apple, cherry, strawberry, apple, orange], თქვენი დავალებაა გადაუაროთ მოცემულ სიას და დაითვალოთ თუ რამდენჯერ გხვდებათ (მაგალითად: 'Apple') ხოლი სიაში 

const fruitsArray = ['apple', 'cherry', 'strawberry', 'apple', 'orange','apple']

let countFruit = 0;

for(let i = 0; i < fruitsArray.length; i++){
    if(fruitsArray[i] === 'apple'){
        countFruit += 1
    }
}

console.log(countFruit)

