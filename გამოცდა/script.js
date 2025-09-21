let amount = document.getElementById("inp1").value

let year = document.getElementById("inp2").value

let percent =  document.getElementById("inp3").value

let button = document.getElementById("btn1")



let formula =  ((parseInt(amount) * parseInt(year)) * parseInt(percent)) + parseInt(amount)

button.addEventListener("click",() =>{
    console.log(formula)
})