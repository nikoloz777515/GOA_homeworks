// 2) შექმენით მომხმარებლის ობიექტი ოთხი კუთვნილებით (name, surname, age, country), getter მეთოდის გამოყენებით დააბრუნეთ ამ მომხმარებლის სახელი გვარი და საცხოვრებელი ადგილი, setter მეთოდის დახმარებით კი შეამოწმეთ თუ მომხმარებლის ასაკი მეტია ან ტოლი 18 - ის მაშინ შეცვალეთ მისი ასაკი, სხვა შემთხვევაში კი გამოუტანეთ რომ 'The person is not an adult', ასევე ახსენით კომენტარების სახით თუ რა განსხვავებაა getter და setter მეთოდს შორი

const user ={
    name: 'Giorgi',
    surname: 'Dadiani',
    age: 27,
    country: 'Georgia',

    get info(){
        return `${this.name}, ${this.surname} lives in ${this.country}`
    },
    set Newage(years){
        if(years >= 18){
            this.age = years
        }else{
            console.log('The person is not an adult')
        }
    }


}
console.log(user.info) 

user.Newage = 17 
console.log(user.age)


// getter და setter  
// ისგანსხვავებაა რომ 
// getter ით ვიღბთ მნიშვნელობას როდესაც ვნახულობთ ობიექტის წევრს და 
// setter ით ვაყენებთ მნიშვნელობას  დ ვცვლით ობიექტის წევრს

