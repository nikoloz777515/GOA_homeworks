// 2) fetch - ის დახმარებით გააგზავნეთ მოთხოვნა https://fakestoreapi.com/products ამ ლინკზე, წამოიღეთ პროდუქტები და დაა - render - ეთ (გამოიტანეთ) საიტზე, გამოიტანეთ პროდუქტების ფასი, description, სურათი, rating, category, title, დაულაგებელი სიის სახით 



let ul  =  document.getElementById("uld")

fetch("https://fakestoreapi.com/products")
    .then(res => res.json(res))
    .then(products => render(products))
    .catch(cth => console.log(cth))
    

const render = (prd) =>{
        ul.innerHTML = prd.map(product => `
    <li>
        <p>${product.title}</p>

        <img src = ${product.image} />

        <p>${product.rating}</p>

        <p>${product.price}</p>

         <p>${product.category}</p>
    </li>
        `)
}