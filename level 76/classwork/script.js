// 1) fetch ის გამოყენებით გააგზავნეთ მოცემულ მისამართზე მოთხოვნა, მიღებული მონაცემებით შექმენით სტრინგი სადაც გექნებათ მოცემული li თეგები რომელში ჩასმული იქნება თითოეული პროდუქტის ინფორმაცია, შექმენით ორი ფუნქცია პირველი render და მეორე createProductLI რომელსაც გადაეცემა მასივი, createProductLI აბრუნებს სტრინგს render ფუნქციაში და რენდერ ფუნქცია გამოიტანს ეკრანზე

// https://fakestoreapi.com/products



let ul = document.getElementById("prod")


const createProductLI = (products) =>{
        let result = ""

        for(const product of products){
            result +=
         `
            <h3>Title: ${product.title}</h3>

            <p>Description: ${product.description}</p>

            <h2> Price: ${product.price}$</h2>

            <img src = ${product.image} />
        ` 
        }
        return result;
}  



const render = (products) =>{
    const liElemets = createProductLI(products)

    ul.innerHTML = liElemets

     



        
}
fetch("https://fakestoreapi.com/products")
    .then(res => res.json(res))
    .then(dt => render(dt))
     .catch(err => console.error("Error:", err))



