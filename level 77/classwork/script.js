


function cheeck (){
    let form = document.querySelector('form');
    let chck = document.querySelector('button');
    let email = form.querySelector('#email');
    let label = document.querySelector('label')
    let main = document.getElementById('main')

    chck.addEventListener("click",(e) => {
            e.preventDefault()


            
      if(email.value.includes("@") && email.value.includes(".com")){
            main.innerHTML = `
            <div class = 'suc'> 

            <img  class ="sucs" src ="./newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg"/>

            <h1 class ="h1">Thanks for <br> subscribing!</h1>
            
            <p class = "prg">  A confirmation email has been sent <br> to <b>${email.value}</b> 
  Please open it and click <br> the button inside to confirm your subscription </p>

  <button class = "btnd">Dismiss message</button>
           </div> `

            let btn = document.querySelector(".btnd");
            btn.addEventListener("click", () => {
                main.innerHTML = ""; 
            });

            btn.style.position = "relative"
            btn.style.top = "70px"
            btn.style.left = "15%"
            


            btn.style.width = "320px"
            btn.style.height = "50px"
            btn.style.borderRadius ="8px"
            btn.style.border = "none"
            btn.style.backgroundColor = " hsl(234, 29%, 20%)"
            btn.style.color = "white"
            btn.style.fontWeight = "600"
            btn.style.fontSize = "14px"


           let dv = document.querySelector(".suc");
           dv.style.backgroundColor = "white"
           dv.style.borderRadius = "34px"
           dv.style.width = "460px"
           dv.style.height = "450px"


           let img = document.querySelector(".sucs")

           img.style.position = "relative"

           img.style.left = "60px"
           img.style.top = "50px"


          let p = document.querySelector(".prg")
          p.style.position = "relative"
          p.style.left = "15%"
          p.style.top = "45px"

          let h1 = document.querySelector(".h1")

          h1.style.position = "relative"
          h1.style.top = "40px"
          h1.style.left = "15%"
          h1.style.fontSize = "44px"


            
            
        }
        else{

            email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.35)'
            email.style.borderColor = 'hsl(4, 100%, 67%)'
            label.innerText = " Please enter a valid email"
            label.style.color = "red"
            
        }

        

    });

    
}

cheeck()