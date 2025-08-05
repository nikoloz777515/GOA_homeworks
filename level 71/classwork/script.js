// 1) შექმნათ კლასი სახელად account, რომლის კონსტრუქტორსაც გადაეცემა პაროლი იმეილი და სახელი, პაროლი და იმეილი უნბდა იყოს პირადული ველები, შექმენით მეთოდი სახელად  introduce რომელიც უბრალოდ დაბეჭდავს იმ ობიექტის სახელს რომლზეც გამოვიძახეთ, შემდეგ შექმენით settter მეთოდი როპმლის გამოყენიბთაც შევცვლით პაროლს, სანამ პაროლის შეცვლის უფლებას მისცემდეთ კლას იქმადე შეამოწმეთ შეიცავს თუ არა პაროლი მინიმუმ 6 სიმბოლო, აგრეთვე პაროლი უნდა შეიცავდეს რიცხვებს და ინგლისურ ასოებს თუ ამ პირობას ვერ დააკმაყოფილებს არ მისცეთ შეცვლის საშუალება, შემდეგ შექმენიტ getter მეთოდი რომლის დახმარებითაც დააბრუნებთღ იმეილს, (კომენტარებით ახსენით განსხვავება კლასსა და ფუნქცვიურ კონსტრუქტორს შორის, მათი მინუსები და პლიუსები გამოკვეთეთ)

class Account {
    constructor(mail,password,name){
        this._mail = mail;
        this._password = password;
        this._name = name;
    }

    introduce (){
        return `object name is ${this._name}`
    }

    set password(Newpass){
        let leng = Newpass.length >= 6
         const hasNumber = /[0-9]/.test(Newpass)  
        const hasLetter = /[a-zA-Z]/.test(Newpass)


        if (leng && hasNumber && hasLetter) {
   this._password = Newpass;
    console.log(" პაროლი წარმატებით შეიცვალა")
  } else {
    console.log(" სუსტი პაროლი აუცილებელია  ამდე 6 სიმბოლო რიცხვი და ასო")
  }  
    }

    get email (){
        return this._email
    }
     
}
  
const user = new Account("example@mail.com", "12345678NB", "Nika")

console.log(user.introduce()); 
console.log(user.email);      
   
user.password = "pass1234"     
 
