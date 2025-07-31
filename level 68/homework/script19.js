// 19) შექმენით რაიმე ობიექტი, for in - ის გამოყენებით დაბეჭდეთ კუთვნილებები, და მნიშვნელობები

const me = 
    {
    name: 'Nika',
    lastname: 'Kvelashvili',
    age: 15,
    status: 'active',
    country: 'Georgia'
    }


for(let key in me){
    console.log(key + " " +  me[key])
}