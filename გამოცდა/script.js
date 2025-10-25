
let button = document.getElementById("btn1")


button.addEventListener("click", () => {
    let amount = document.getElementById("inp1").value

    let year = document.getElementById("inp2").value

    let percent = document.getElementById("inp3").value


    let formula = ((parseInt(amount) * parseInt(year)) * parseInt(percent)) + parseInt(amount)

    console.log(formula)
})






// ((amount * year) * percent) + amount