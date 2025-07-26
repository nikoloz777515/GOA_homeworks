// 11) შექმენით მასივი რომელიც შედგება სხვადასხვა მნიშვნელობებისგან როგორიცაა: boolean - მნიშვნელობები, რიცხვები, string - ები, მასივი, ობიექტი, თქვენი დავალებაა რომ filter მეთოდის გამოყენებით დატოვოთ მხოლოდ ისეთი მნიშვნელობები რომლებიც string - შია მოცემულ

const arr = [true,false,'hello',2,3,4,5,7,"byee", { model: 'corolla', year: 2017 }]

let filTeredarr = arr.filter(fltr =>  typeof fltr === "string")

console.log(filTeredarr)