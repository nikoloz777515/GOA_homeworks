// 18) შექმენით მომხმარებელების ობიექტი თითოეულს აუცილებლად ნდა ქონდეს age კუთვნილება, reduce მეთოდის გამოყენებითდააჯგუფეთ მომხმარებლები ასაკის მიხედვით, მაგალითად 20-29, 30-39, 10-19, 40-49 და ასე შემდეგ

let users = [
    {
        name: 'nika', age: 18
    },
    {
        name: 'nika', age: 22
    },
    {
        name: 'nika', age: 33
    },
    {
        name: 'nika', age: 44
    }, {
        name: 'nika', age: 56
    },
    {
        name: 'nika', age: 62
    },
    {
         name: 'nika', age: 77
    }
]

let result = {

}
for(let i = 0; i < users.length; i++){
    let user = users[i]
    let age = user.age
    let start = Math.floor(age / 10) * 10;
    let end = start + 9 
    let range = start + '-' + end;
    if(!result[range]){
        result[range] = []
    }
    result[range].push(user)
    
}

console.log(result)
