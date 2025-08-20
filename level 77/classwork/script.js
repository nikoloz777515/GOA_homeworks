


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

            <img  class ="sucs" src ="./assets/images/icon-success.svg" />

            <h1>Thanks for <br> subscribing!</h1>
            
            <p>  A confirmation email has been sent <br> to ${email} 
  Please open it and click <br> the button inside to confirm your subscription </p>

  <button>Dismiss message</button



            
            </div>
            
            
            
            
            `
            
        }
        else{

            email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.35)'
            email.style.borderColor = 'hsl(4, 100%, 67%)'
            label.innerText = " Please enter a valid email"
            
        }

    });

}

cheeck()