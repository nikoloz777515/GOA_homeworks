// 6) კომენტარების სახით ახსენით თუ რა განსხვავებაა class - სა და function constructor - ს შორის, მოიძიეთ დამატებითი ინფორმაცია class - ების შესახებ, და გააკეთეთ რამოდენიმე მაგალითი

// class სა და constructor შორის ის განსხვავებაა რომ 
// class ები უფრო ადვილი წასაკითხი და გასაგებია აქვს მარტივი სინტაქსი

// და constructor ების კოდის გაგება შედარებით რთულია არის უფრო ძველი და ახლანდელ დროში არის ნაკლებად გამოყენებადი ვიდრე კლასები   



class Names{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    getFulname (){
        return`fullname is ${this.name},${this.surname}`
    }

}


const object1 = new Names ('nika','kvelashvili')

console.log(object1.getFulname())






class Country{
    constructor(country){
        this.country = country
    }

      Bestcountry (){
        return `the country is ${this.country} this is best country in the world!!`
    }
}

const obj2 = new Country('Georgia')



console.log(obj2.Bestcountry())