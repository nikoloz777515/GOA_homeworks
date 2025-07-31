// 1) შექმენით ობიექტი, სახელად account რომელსაც გააჩნია 3 კუთვნილება, email, pass, fullname,  იმეილის და პაროლის კუთვნილება უნდა იყოს პირადული, შემდეგ შექმენით setter მეთოდი სახელად pass რომლის დახმარებითაც შეცვლით პაროლს, სანამ პაროლი შეიცვლება იქამდე შეამოწმეთ ახალი პაროლის ზომა შედგება თუ არა მინიმუმ 6 სიმბოლოსოგან თუ შედგება შეცვალეთ და თუ არ შედგება დაბეჭდეთ კონსოლში რომ პაროლის ზომა არ ემთვევა მინიმუმ 6 სიმბოლოს~, აგრეთვე შექმენით getter მეთოდი რომლის მეშვეობითაც დააბრუნებთ email და სააბოლოოდ ჩვეულებრივი მეთოდი greet რომელიც დაბეჭდავს მე ვარ სახელი გვარი.


let account = {
  _email: 'emeail@gmail.com',
  _pass: 'paroli123',
  fullname: 'Nikoloz Kvelashvili',

  set pass(newPass) {
    if (newPass.length >= 6) {
      this._pass = newPass
    } else {
      console.log('password length has to be at least 6 characters')
    }
  }, 

  get email(){
    return this._email
  },
  greet(){
    console.log(`მე ვარ ${this.fullname}`)
  }

}

account.pass ='niko2'

account.pass ="np123456"
console.log(account.email)
account.greet();


