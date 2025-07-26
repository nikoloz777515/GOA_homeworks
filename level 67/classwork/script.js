// 1) გამოიყენეთ findIndex მეთოდი და თქვენი სურვილით გააკეთეთ 2-3 მაგალითი (ახსენიტ კომენტარებით რაში შეიძლება გამოვიყენოთ findIndex)


let numbers = [2,4,6,7,0]

let numbersIndex = numbers.findIndex(number => number === 7)

console.log(numbersIndex)






let names = ['niko','ana','atuka']

let namesIndex = names.findIndex(name => name === "atuka")

console.log(namesIndex)


let cars = [
  { model: 'corolla', year: 2017 },
  { model: 'f10', year: 2013 },
  { model: 'cls', year: 2012 }
];

let indeXcars = cars.findIndex(car => car.year === 2012)

console.log(indeXcars)