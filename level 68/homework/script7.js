// 7) მომხმარებელს შემოატანინეთ რაიმე string - ი შეამოწმეთ არის თუ არა ის palindrome (palindrome - არის ისეთი სიტყვა რომელიც იკითხება იგივენაირად როგორც მისი შემობრუნებული ვერსია მაგალითად 'anna' - სიტყვა არის palindrome) 

let input = prompt('please enter a string')

// const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "")

const reversed = input.split("").reverse().join("")


if(input === reversed){
    console.log(`'this your string ${input}  is palindrome' `)
}
else{
    console.log(`tis is your strig'${input} is not palindrome'`)
}