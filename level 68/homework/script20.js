// 20) შექმენით ერთი ობიექტი, მასში დაამატეთ ერთი კუთვნილება, წაშალეთ ერთი კუთვნილება და აგრეთვე შეცვალეთ ერთი კუთვნილების მნიშვნელობაც

const obj = {
    name: 'Nika',
    lastname: 'Kvelashvili',
    age: 15,
    status: 'active',
    country: 'Georgia'
}

obj.city = "gori"
delete obj.age
obj.country = 'USA'

console.log(obj)