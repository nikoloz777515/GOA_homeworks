
// 2) შექმენით ფაილი სახელად string.methods.js ამ ფაილში უნდა გქონდეთ ფუნქციები capitalize რომელიც სიტყვის პირველ ასოს გადააქცევს დიდ ასოდ, reverse რომელიც გადმოცემულ სიტყვას შემოაბრუნებს, toUpper რომელიც სიტყვის ყველა სიმბოლოს გადააქცევს დიდ ასოდ, toLower რომელიც სიტყვის ყველა სიმბოლოს გადააქცევს პატარა ასოდ, ეს ფუნქციები დაა - export - ეთ გაიტანეთ ფაილიდან დააიმპორთეთ მთავარ ფაილში და გატესტეთ


const myFunc = {
    capitalize: function(str){
        return str[0].toUpperCase() + str.slice(1)
    },
    reverse: function(str){
        return str.split("").reverse()
    },
    upper: function(str){
        return str.toUpperCase()
    },
    lower: function(str){
        return str.toLowerCase()
    }

}


module.exports = myFunc
