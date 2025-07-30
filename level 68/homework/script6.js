//  6) მომხმარებელს შემოატანინეთ რიცხვი, შეამოწმეთ არის თუ არა ის მარტივი
let input = prompt("enter a number");
let number = parseFloat(input);


if (number > 0) {
    console.log("ეს რიცხვია დადებითი");
} else if (number < 0) {
    console.log("ეს რიცხვი უარყოფითია");
} else {
    console.log("ეს რიცხვია 0");
}

if (Number.isInteger(number)) {
    console.log("ეს რიცხვია მთელი");
} else {
    console.log("ეს რიცხვი ათწილადია");
}


function isPrime(n) {
    if (n <= 1 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

if (isPrime(number)) {
    console.log("ეს რიცხვი მარტივია");
} else {
    console.log("ეს რიცხვი არ არის მარტივი");
}
