let rmv = document.querySelectorAll(".rMv")

rmv.forEach(bt =>{
    bt.addEventListener("click", () =>{
        bt.closest(".ext-card").remove()
    })
})





