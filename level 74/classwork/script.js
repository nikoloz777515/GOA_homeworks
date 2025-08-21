let rmv = document.querySelectorAll(".rMv")

let button = document.getElementById("bt2")

let body = document.body

let night = document.getElementById("btn7")

let ext = document.querySelectorAll(".ext-card")

let idk = document.querySelectorAll(".idk")

let ext2 = document.getElementById("id1")



button.addEventListener("click",()=>{
    body.style.backgroundColor = "rgb(238, 246, 253)"
    for(let i of ext){
        i.style.backgroundColor = "white"
    }
    for(let i of idk){
        i.style.color = "black"
    }
    ext2.style.backgroundColor = "white"
})


night.addEventListener("click",() =>{
     body.style.backgroundColor = " hsl(227, 75%, 14%)"
    for(let i of ext){
        i.style.backgroundColor = "hsl(226, 25%, 17%)"

    }
    for(let i of idk){
        i.style.color = "white"
    }
    ext2.style.backgroundColor = "hsl(226, 25%, 17%)"
})

rmv.forEach(bt =>{
    bt.addEventListener("click", () =>{
        bt.closest(".ext-card").remove()
    })
})





