// 3) შექმენით 4 input - ველი სადაც მომხმარებელს შეყავს ინფორმაცია როგორიცაა name, lastname, email, password, თქვენი დავალებაა რომ მოიპოვოთ წვდომა თითოეულ input - ზე და შეინახოთ გადმოცემული ინფორმაცია localStorage - ში ლოკალურ ბაზაში (მოიძიეთ ინფორმაცია)



const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const fdt = new FormData(form);
   const data = Object.fromEntries(fdt.entries());
console.log(data)

 localStorage.setItem("user", JSON.stringify(data));

    alert("მონაცემები წარმატებით შეინახა")
 
})
