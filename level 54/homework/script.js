const button = document.getElementById("BT");

const sec = 7; 

button.addEventListener("click", function() {
    const input = Number(prompt("Enter a number:"));

    if (input == sec) {
        alert("You have guessed the secret number");
    
    
    } else {
        alert("Please enter a valid number.");
    }
});