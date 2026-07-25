// 1) შექმენით interface რომელსაც ჩააშენებთ კლასში implements keyword დახმარებით
interface Person{
  name: string;
  age: number;
  height: number;
}

class human implements Person{
  name: string;
  age: number;
  height: number;

  constructor(name: string, age: number,height: number) {
    this.name = name;
    this.age = age;
    this.height = height
  }
}

const Me = new human("gio", 19, 172);


// 2) შექმენით ერთმანეთში ჩაშენებული 4 ტიპის ობიექტი დააკვირდით რამდენად რთულია წერაც და წაკითხვაც, შემდეგ დაყავეთ ეს ინტერფეისი სხვადასხვა ინტერფეისებად



// 3) შექმენით ერთი ზოგადი interface და შემდეგ კონკრეტული interface რომელსაც გააფართოვებთ ზოგადი interface დახმარებით
interface ElectronicDevice {
  brand: string;
  model: string;
}

interface Iphone extends ElectronicDevice {
  screenSize: number;
  operatingSystem: string;
}

const myPhone: Iphone = {
  brand: "Apple",
  model: "Iphone 17",
  screenSize: 6.3,
  operatingSystem: "iOS"
};

console.log(myPhone);



// 4) ახსენით კომენტარებიოთ რა არის implements და extends რეზერვირებული სიტყვები და რაში გვეხმარება ისინი.

//implements იმპლემენტაცია და ვიყენებთ ამას კლასებში როცა ვიყენებთ ინტერფეისის კუთვნილებებს კლასი უკვე ვალდებულია რომ გამოიყენოს იმპლემენტაციის კუთვნილებები

//extend არის გაფართოება და არის ის როცა მშობელი კლასიდან ან ინტერფეისიდან ვიღებთ კუთვნილებას და ვიყენებთ შვილობილ კლასში


//5) შექმენით რთული ობიექტის 2 ინტერფეისი და გამოიყენეთ მასზე union
interface Car {
  type: "car";
  brand: string;
  engine: {
    horsepower: number;
    fuelType: string;
  };
}

interface plane {
  type: "airplane"; 
  model: string;
  wingspan: number;
  airline: {
    companyName: string;
    country: string;
  };
}

type Vehicle = Car | plane;



const Bmw: Car = {
  type: "car",
  brand: "Bmw m3",
  engine: {
    horsepower: 670,
    fuelType: "gasline"
  }
};

const Boeing: plane = {
  type: "airplane",
  model: "Boeing 747",
  wingspan: 64.4,
  airline: {
    companyName: "Georgian Airways",
    country: "Georgia"
  }
}