// 1) გააკეთეთ პროეტი, წამოიღეთ მონაცემები ამ ლინკიდან https://fakestoreapi.com/products, გამოიყენეთ fetch, async/await try/catch, ვისაც არ გაქვთ დამატებული Add to cart და Delete from cart ფუნქციები, (დაამატეთ) დამატებული პროდუქტები კი შეინახეთ ლოკალურ ბაზაში რადგან და - refresh - ებისას პროდუქტები არ გაქრეს, ასევე შეამოწმეთ თუ პროდუქტი უკვე არსებობს ერთი და იმავე id - ით alert - ის სახით აცნობეთ რომ The product is already added to the cart ან კიდევ გაზარდეთ ამ პროდუქტის რაოდენობა ერთით





const func = async () => {
    try {
        let ftch = await fetch('https://fakestoreapi.com/products')
        let jsn = await ftch.json()
        // console.log(jsn)
        render(jsn)
    } catch (e) {
        console.log("this is error", e)
    }


}


function render(products) {

    const main = document.getElementById('products')
    main.innerHTML = ""
   
    products.forEach(el => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${el.description}</p>
        <P>${el.title}</p>
        <p>${el.price} $ </p>
        <img src ="${el.image}" width = 200/>

        <button class ="btn1" >Add</button>
        `

        
         let btn1 = div.querySelector(".btn1")
    btn1.addEventListener("click", () => add(el))
    

     
       main.appendChild(div)    
   });

}

let cart = []

const add = (product) =>{

const exist = cart.some(itm => itm.id === product.id)

    if (exist) {
        alert("This product is already in the cart you can buy 1 in one time")
        return;
    }

    cart.push(product)
    console.log("cart:", cart)

        const locb = JSON.stringify(cart);

        localStorage.setItem("myArray", locb);

        const idk = localStorage.getItem("myArray");

      

      const cartDiv = document.getElementById("prod")
    cartDiv.innerHTML = cart.map(itm=> `
        <p>${itm.title} 
        ${itm.price} $</p>

        <button id = "btn2">Remove</button>
    `)
    let btn2 = document.querySelector("#btn2")
   btn2.addEventListener("click", (e) =>{
      
   })
}

func()