//  1) შექმენით ერთი Class - ი სახელად Animal რომელის constructor - საც გადაეცემა ორი პარამეტრი, პირველი - name, მეორე - age, ამ Class - ს უნდა ქონდეს ერთი მეთოდი სახელად describe რომელიც აბრუნებს მცირე ინფორმაციას animal (ცხოველის) შესახებ, შექმენით ერთი class სახელად Dog რომელიც მემკვიდრეობით Animal class - დან იღებს name, age კუთვნილებებს, Dog - constructor - ს უნდა ქონდეს დამატებით ერთი პარამეტრი energy, გამოიყენეთ super() ფუნქცია იმისათვის რომ გამოიძახოთ მშობელი Animal class - ის constructor - ი, შექმენით setter მეთოდი რომელიც განაახლებს energy - ს იმ შემთხვევაში თუ მისი მნიშვნელობა 50 - ზე მეტია  

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }


    describe (){
        return `name is ${this.name}, and age is ${this.age}`
    }
}

class Dog extends Animal {
    constructor(name,age,energy){
        super(name,age)
        this._energy = energy
    }

    set energy (i){
        if(i > 50){
            this._energy = i
        }else{
            console.log('energyy is enough!!')
        }
    }
        
    get energy (){
        return this._energy
    }

    }


let obj1 = new Animal ('rex',13)
console.log(obj1)
console.log(obj1.describe())

let obj2 = new Dog('max',50,89)
console.log(obj2)
console.log(obj2.describe())



obj2.energy = 40

console.log(`energy level is ${obj2.energy}%`)
obj2.energy = 99