//  3) შექმენით function constructor სახელად Book რომელიც იღებს 4 პარამეტრს title, author, year, genre, შეამოწმეთ თუ Book - ის year პარამეტრი არის რიცხვი და title პარამეტრი შეადგენს მინიმუმ 3 სიმბოლოს ან მეტს, მაშინ გამოიტენთ წიგნის მონაცემები შემდეგნაირად 'The book name is ${title} its author is ${author} and the book was released in ${year}' სხვა შემთხვევაში კი გამოიტენთ error - ის message - ი



function Book (title, author, year, genre){
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;


    this.Warnings = function (){
   if(typeof this.year === 'number' && this.title.length >= 3){
        console.log(`The book name is ${title} its author is ${author} and the book was released in ${year}`)
}else{
    console.log('eror')
     }

    }

}

const bok1 = new Book('IT safudzvlebi','niko.k',2078,'roman');

bok1.Warnings();
console.log(bok1)