

let ul  =  document.getElementById("uld")

let cart = document.getElementById("cart")

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

