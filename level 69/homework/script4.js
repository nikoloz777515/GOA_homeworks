// 4) კომენტარების სახით ახსენით თუ რა არის constructor - ი, შექმენით constructor - ი სახელად person, გააკეთეთ ამ person - კონსტრუქტორში ოთხი კუთვნილების ინიციალიზება (name, surname, age, country), შეამოწმეთ იმ შემთხვევაში თუ name - ი შეიცავს 4 სიმბოლოს ან მეტს მაგ შემთხვევაში დაბეჭდეთ მომხმარებლის სახელი, სხვა შემთხვევაში კი გამოუტანეთ რომ 'The person's name should contain at least 4 characters', ასევე შექმენით ერთი მეთოდი aboutThePerson - რომელიც დაბეჭდავს მომხმარებლის ინფორმაციას შემდეგნაირად 'The person's name is ${name}, surname ${surname}, the person's age is ${age} and person lives in ${country}'



function person(name, surname, age, country){
    this.name = name
    this.surname = surname
    this.age = age
    this.country = country

    if(this.name.length >= 4){
        console.log(this.name)
    }else{
        console.log('The persons name should contain at least 4 characters')
    }

    this. aboutThePerson = function (){
        console.log(`The persons name is ${this.name},surname ${surname},the persons age is ${age} and person lives in ${country}`)
    }
}


const person1 = new person('nika','kvela',16,'georgia')

person1.aboutThePerson()

