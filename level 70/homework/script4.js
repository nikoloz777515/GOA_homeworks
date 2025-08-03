// 4) შექმენით Class - ი სახელად Movie - რომელიც constructor მეთოდში იღებს 4 პარამეტრს title, director, rating, releaseYear, შექმენით ერთი მეთოდი isHit რომელიც დააბრუნებს true მნიშვნელობას იმ შემთხვევაში თუ rating - ი არის 8 - ზე მეტი, new - ის გამოყენებით შექმენით 2 განსხვავებული Movie - ის ობიექტი

class Movie{
    constructor(title, director, rating, releaseYear){
        this.title = title;
        this.director = director;
        this.rating = rating;
        this.releaseYear = releaseYear;
        
    }

     isHit () {
        if(this.rating >= 8){
            return true;
        }else{
            return false;
        };
    };
}


 


const obj1 = new Movie('Rocky','Silvester-Stallone',5,1984);


const obj2 = new Movie('Thor','Nikoloz Kvelashvili',10,2024);



console.log(obj1,obj1.isHit());



console.log(obj2,obj2.isHit());