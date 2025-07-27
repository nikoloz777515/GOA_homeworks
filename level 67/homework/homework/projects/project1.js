const display = document.getElementById("display")

function append (input){
    display.value += input
}



function clearDis (){
    display.value = "";
}


function calc (){
    display.value = eval(display.value)
}