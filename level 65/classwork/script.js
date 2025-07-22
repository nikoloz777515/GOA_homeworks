// 1) შექმენით ფუნქცია რომელსაც დაარქმევთ higherOrderFunction, მნიშვნელობად გადაეცემა greet ფუნქცია გამოიძახეთ greet ფუნქცია მაღალი რიგირს ფუნქციის ტანში (აუცილებლად ახსენით რა არის higher order function და რა მონაცემთა ტიპს ეკუთვნის ფუნქციები, აგრეთვე ახსენით რა არის stack და  heap) 



function higherOrderFunction(greet) {
    console.log("Hello")
    greet()
}

function greet() {
    console.log("Hello")
}


higherOrderFunction(greet)


// higher order function ესარის ფუნქცია ტომელიც იღებს მეორე ფუნქციას პარამეტრად და აბრუებს ფუნქციას შედეგად

// heap ინახავს ფუნქციებსა და ობიექტებს

// stack გამოიყენება ცვლადებისთვის და ფუნქციებისთვის 





