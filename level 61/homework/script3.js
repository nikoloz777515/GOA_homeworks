//  3) შექმენით ერთი მასივი შეინახეთ მასში ხილის სახეობები მაგალითად [apple, cherry, strawberry, apple, orange], თქვენი დავალებაა გადაუაროთ მოცემულ სიას და დაითვალოთ თუ რამდენჯერ გხვდებათ (მაგალითად: 'Apple') ხოლი სიაში 

const array = ['apple', 'mango', 'strawberry', 'apple', 'orange', 'cherry'];

const count = {};

array.forEach(item => {
  count[item] = (count[item] || 0) + 1;
});

console.log(count);


