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
    let ul = document.getElementById("ull")

    ul.innerHTML = products
        .map(
            (el) => `
      <li>
        <p>${el.description}</p>
        <p>${el.price} $</p>
        <img src="${el.image}" width="100"/>

        <button id = "btn1">Add to Cart </button>

     </li>
    `)

           
      let btn1 = document.getElementById("btn1")

       btn1.addEventListener("click", () => add(products))


}

let cart = []

const add = (products) =>{
    cart.push(products)
    console.log(cart)
}

func()