// 1)
let age: string | number = 19;

age = "nineteen"; 

// 2) 
type Person = {
  name: string; 
  lastname: string; 
  age: number;
};

const person: Person = {
  name: "Nikoloz",
  lastname: "Kvelashvili",
  age: 16
};
const mixed: (string | Person)[] = [
  "hello",
  person,
  { name: "gio", lastname: "iashvili", age: 20 }
];

// 3) 
function Value(value: string | number){


  if (typeof value === "string") {
    console.log(`this is text and its value is ${value.length}`);
    return value.toUpperCase(); 
  }

  if (typeof value === "number") {
    console.log(`this is number and its valueis ${value * value}`);
    return value * 2;
  }
}

// 1) შექმენით ცვლადი რომელშიც შეინახავთ ან სტრინგს ან რიცხვს

// 2) თქვენი ობიექტის ტიპი სახელად Person სადაც 3 კუთვნბილება გექნებათ, შემდეგ შექმენით union ტიპის მასივი სადაც ან სტრინგს შეინახავთ ან Person ტიპს

// 3) შექმენიტ ფუნქცია სადაც პარამეტრს აქვს UNION ტიპი და გამოიყენეთ type guard აგრეთვე ახსენით კომენატრებით რა არის type guard