// 1) შექმენით function constructor - ი სახელად Car, რომელიც იღებს ოთხ პარამეტრს make, model, year, color, this - ის გამოყენებით მოცემული პარამეტრები მიანიჭეთ ობიექტს

class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

 const object1 = new Car('Mercedes-Benz','CLS63s',2016,'Black');

const object2 = new Car('BMW','F30',2016,'Blue');

const object3 = new Car('Mercedes-Benz','G63',2019,'Black');

console.log(object1);
console.log(object2);
console.log(object3)

