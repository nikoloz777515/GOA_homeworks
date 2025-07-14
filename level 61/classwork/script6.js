// 6) შექმენით ფუნქცია სახელად realFriends რომელსაც გადაეცემა სახელების მასივი, თქვენი დავალებააა შექმნათ ერთი ცარიელი მასივი სახელად myFriends რომელშიც მხოლოდ იმ სახელებს ჩაამატებთ რომლის ზომაც (სიმბოლოების რაოდენობაც) >= 4 შემდეგ კი დააბრუნეთ ეს მასივი


const realFriends = function(names) {
    const friends = []

    for(let i = 0; i < names.length; i++) {
        if(names[i].length >= 4) {
            friends.push(names[i])
        }
    }

    return friends
}
const result = realFriends(['dato', 'ana', 'gio', 'sali'])
console.log(result)