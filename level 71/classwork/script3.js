// 3) შექმენით ფორმა, რომელშიც გექნება 3 input email, password, fullname , მოუსმინეთ დადასტურების მოვლენას, როდესაც დადასტურეება მოხდება ფორმიდან ამოიღეთ მ,ნიშვნელობები და გადაეცით Account კლასს რომელსაც ექნება ერთი საერთო set მეთოდი password, შექმენის შემდეგ კი დაამატეთ account ობიექტი accounts მასივში

const form = document.querySelector("form");


const accounts = []

class Account {
  constructor(mail, fullname) {
    this.mail = mail;
    this.fullname = fullname
    
  }

  set password(newpass) {
    this._password = newpass
  }

  get password() {
    return this._password
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const email = form.email.value
  const password = form.password.value
  const fullname = form.fullname.value

  const account = new Account(email, fullname)
  account.password = password

  accounts.push(account)
  console.log(account)
  console.log(accounts)

  form.reset()
})
