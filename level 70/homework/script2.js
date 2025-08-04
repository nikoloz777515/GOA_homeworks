// 2) შექმნილ function constructor - ს დაუმატეთ მეთოდი, getDescription, რომელიც console - ბეჭდავს მანქანის შესახებ ინფორმაციას, Car constructor - ში შეამოწმეთ იმ შემთხვევაში თუ მაქანის წელი 2000 ნაკლებია მაშინ გამოიტანეთ რომ 'This is an old car' სხვა შემთხვევაში კი გამოიტანეთ 'This is a modern car', new - ის გამოყენებით შექმენით 3 განსხვავებული მანქანის ობიექტი 



function Car (make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;


     this.getDescription = function (){
    console.log(`this car make is ${make} this car model is ${model} this car year is ${year}`)

    if(this.year < 2000){
        console.log('This is an old car')
    }else{
        console.log('This is a modern car')
    }

    }
}

const obj1 = new Car('toyota','prado',2008)
obj1.getDescription()
console.log(obj1)


const obj2 = new Car('opel','astra',1994)
obj2.getDescription()
console.log(obj2)



const obj3 = new Car('Lexus','GX',2007)
obj3.getDescription()
console.log(obj3)