// 3) შექმენით ობიექტი სახელად  person, ობიექტში დაამატეთ introduce მეთოდი, რომელიც ბეჭდავს person ობიექტი firstname და lastname კუთვნიულებას


let person = {
  name: "Gio",
  lastname: "Akofashvili",

  introduce: function() {
    console.log(`Hello, my name is ${this.name} ${this.lastname}`)
  }
}


person.introduce()