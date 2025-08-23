

let ul  =  document.getElementById("uld")

let cart = document.getElementById("cart")

let CartItem = []

fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
    .then(products => render(products))
    .catch(cth => console.log(cth))
    
    

const render = (prd) =>{
        ul.innerHTML = prd.map(product => `
    <li>
        <p>${product.title}</p>

        <p>${product.price}<p/>

     <p>${product.description}</p>


        <p>${product.category}</p>

           <img src = ${product.image} />
            <button class = "btn"> ${product.id}ADD</button>

            <button>Remove</button>
         <p><b>Rating:</b> ⭐ ${product.rating.rate} ( ${product.rating.count} reviews )</p>

    </li>
        `) 
        let addCartButtons = document.querySelectorAll(".btn");
addCartButtons.forEach(btn =>{
    btn.addEventListener("click",() =>{
    
    })
})
     }

     



