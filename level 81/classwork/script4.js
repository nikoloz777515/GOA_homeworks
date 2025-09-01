// 4) გამოიყენეთ POST მეთოდი იმისათვის რომ დაამატოთ ახალი მონაცემი API - ში, დააბრუნეთ მონაცემი

// გამოიყენეთ fetch იმისათვის რომ გააგზავნოთ მოთხოვნა ამ https://fakestoreapi.com/products ლინკზე, გამოიყენეთ headers - ები და ასევე ახსენით კომენტარების სახით თუ რას ნიშნავს ის, გამოიყენეთ body - იმისათვის რომ დაამატოთ ახალი პროდუქტის მონაცემები, საბოლოო შედეგი კი გამოიტანეთ console - ში


ftch = fetch(' https://fakestoreapi.com/products' ,{
    method:'POST',
    headers:{
        "Content-Type": "application/json" 
    },
    body: JSON.stringify({
        title:"Blue Jeans",
        price: 20.99,
        decription:"Good Jeans"
    })

}).then(res => res.json())   
.then(data => console.log(data))
.catch(err => console.error('Error:', err));
