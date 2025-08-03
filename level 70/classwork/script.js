// 1) შექმენით Class სახელად Person, უნდა გქონდეთ constructor - ი რომელსაც გადაეცემა ოთხი პარამეტრი, name, age, lastname, coutry თქვენი დაველბაა რომ შექმნათ  4 ობიექტი new - ის გამოყენებით

class Person{
    constructor ( name, age, lastname, coutry){
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.coutry = coutry;
    }
}


const obj1 = new  Person("Nika",15,"Kvelashvili","Georgia");

const obj2 = new Person("Gio",19,"Gigauri","Georgia");

const obj3 = new Person("Guga",10,"Minashvili","Georgia");

const obj4 = new Person("Goga",18,"Basishvili","Georgia");

console.log(obj1)

console.log(obj2)

console.log(obj3)

console.log(obj4)



// 2) ახსენით კომენტარების სახით თუ რა არის Class - ი, და new instance


//class არის ისეთი მეთოდი რასაც გავუწერთ კოდს ერთხელ და შეგვიძლია გამოვიყენოთ რამდენჯერაც გვინდა და მივცეთ კლუთვნილებები ობიექტს

// new instance ნიშნავს ობიექტის ასლის შექმნას კონსტრუქტორეის ან კლასისგან გადმოცემული კუთვნილებების მიხედვით