// 1) მასივში დაამატეთ 5 ადამიანის ობიექტი, ხუთივე ობიექტი უნდა იყოს ერთნაირი (იგულისხმება კუთვლელების რაოდენობა და სახელები) ამ ობიექტებში მინიმუმ 5 კუთვნილ;ება უნდა იყოს, სახელი, ასაკი, მეთოდი talk, friends კუთვნილება რომელიც ინახავს მეგობრების სახელებს და ჩაშენებული ობიექტი რომელის სახელიცაა address,თქვენი დავალებაა გადაუაროთ ამ მასივს და გაფილტროთ, მხოლოდ ის ობიექტები უნდა იყოს მოცემული ახალ მასივში რომლის ასაკიც > 18 და მეგობრების რაოდენობა 
// მასივში >= 2, filter მეთოდი არ გამოიყენოთ თქვენივე კლონი შექმენით

const people = [
  {
    name: "Giorgi",
    age: 25,
    friends: ["Dato", "Saba"],
    talk: function () {
      return `Hi, Im ${this.name}`
    },
    address: {
      city: "Tbilisi"
    }
  },
  {
    name: "Luka",
    age: 17,
    friends: ["Saba"],
    talk: function () {
      return `Hi, Im ${this.name}`
    },
    address: {
      city: "Batumi"
    }
  },
  {
    name: "Saba",
    age: 30,
    friends: ["Giorgi", "Nino", "Lika"],
    talk: function () {
      return `Hi, I’m ${this.name}`
    },
    address: {
      city: "Kutaisi"
    }
  },
  {
    name: "Dato",
    age: 20,
    friends: ["Saba"],
    talk: function () {
      return `Hi, I’m ${this.name}`
    },
    address: {
      city: "Telavi"
    }
  },
  {
    name: "Luka",
    age: 22,
    friends: ["Nino", "Giorgi"],
    talk: function () {
      return `Hi, I’m ${this.name}`
    },
    address: {
      city: "Zugdidi"
    }
  }
];

const filteredPeople = [ ];

for (let i = 0; i < people.length; i++) {
  const person = people[i]
  if (person.age > 18 && person.friends.length >= 2) {
    filteredPeople.push(person)
  }
}

console.log("Filtered People:")
for (let i = 0; i < filteredPeople.length; i++) {
  const p = filteredPeople[i]
  console.log(`${p.name}  Age: ${p.age}  Friends: ${p.friends.length}   ${p.talk()}`)
}

