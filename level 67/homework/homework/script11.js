// 12) შექმენით მასივი რომელიც შედგება სიტყვებიგან, თქვნი დავალებაა რომ filter მეთოდის გამოყენებით გამოიტანოთ მხოლოდ ისეთი სიტყვები რომლებიც მთავრდება 'y' ასოზე

let names = ["yveli","pamidori","yayacho","vardi"]

let Filterednames = names.filter(fltr => fltr.startsWith("y"))
console.log(Filterednames)