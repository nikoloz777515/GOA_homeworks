// 1) დაამატეთ სტატიკური მეთოდი სახელად checkIfExsists რომელსაც გადაეცემა email, ეს სტატიკური მეთოდი ამოწმებს არსებობს თუ არა accounts მასივი ის იმეილი რომელიც გადმოგვეცა თუ არსებობს დააბრუნებთ true თუ არ არსებობს false

// 2) დაამატეთ სტატიკური მეთოდი AddToStorage რომელსაც გადაცემეა Account კლასით შექმნილი ობიექტი, სანამ დაამატებთ ამ ობნიექტს მასივში იქამდე გამოიძახეთ checkIfExsist სტატიკური მეთოდი რომ დარწმუნეთ აქაუნტის არარსებობაში, თუ არ არსებოპბს აქაუნთი კონკრეტული იმეილით დაამატეთ მასივში თუ არსებობს გამოიძახეთ alert და უთხარით მომხმარებელს რომ რეგისტრაცია წარუმატებლად დასრულდა მიზეზი აქქუნთი რეგისტრირებულია და გათიშეთ სტატიკური მეთოდი

// 3) შექმენით სტატიკური მეთოდი getFromStorage რომელსაც გადაეცემა ერთი პარამეტრი სახელად key, მაგ გასაღების მეშვეობით ლოკალური ბაზიდან წამოიღეთ შენახული ინფორმაცია, შემდეგ JSON.parseმეთოდით გადაიყვანეთ ჯსონის ფ0ორმატიტდან ჯკავასკრიტპის მონაცემის ფორმატში, თუ დაბრუნებული მნიშვნელობა იქნაბე null მაგ შემთხვევაში სტატიკური მეთოდიდან დააბრუნეთ [] ცარიელი მასივი, შემდეგ შეცვლეთ კოდი და გამოიყენეთ ეს სტატიკური მეთოდი  checkIfExsist ში და addToStorage ში (მოიძეთ ინფორმაცია json შესახებ და ახსენით კომენტარებით რა არის ჯსონი და ლოკალური ბაზა)

const form = document.querySelector("form");

const accounts = [];

class Account {
    constructor(email, password, fullname){
        this.email = email;
        this._password = password;
        this.fullname = fullname;
    }

    set password(newPassword) {
        this._password = newPassword;
    }


    static getFromStorage (key){
       const dt = localStorage.getItem(key)
       const prsd = JSON.parse(dt)

        if(prsd === null){
            return []
        }
        else{
            return prsd
        }

        // json არის ტექსტური ფორმატი რომელიც გამოიყენება ტექსტის აღწერებისათვის და გადაცემისთვის

        // ლოკალური ბაზა არის ბაზა სადაც ინახება ინფორმაცია და საიტის ჩაკეცვის ან დარეფრეშების შემდეგაც ეგშენახული მონაცემები არიშლება


    }
    
    static checkIfExsists (email){
         return accounts.some(obj => obj.email === email)
    }
    static AddToStorage (acc){
        if(Account.checkIfExsists(acc.email)){
            alert("loged is not sucesfully")
            return;
        }
         accounts.push(acc)
         alert("registration is sucsesfully")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;
    const fullname = form.fullname.value;

    if(Account.checkIfExsists(email)){
        alert("acc exist")
        return;
    }

    
    
    const account = new Account(email, password, fullname);

    Account.AddToStorage(account);

    accounts.push(account)
})