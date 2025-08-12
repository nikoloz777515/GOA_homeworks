// 7) შექმენით პროექტი, სადაც მომხმარებელს შეეძლება ავტორიზაციის გავლა და რეგისტრაცია, საიტზე უნდა გქონდეთ ორი სექცია პირველი Authorization მეორე Registration, Authorization - ის სექციაში უნდა გქონდეთ input - ები (email, fullname, password) თქვენი დავალებაა რომ ეს ინფორმაცია წამოიღოთ input - თეგებიდან და დაამატოთ users - მასივში, Registration - ის სექციაში უნდა ქონდეს ორი input - ი email, password, წამოიღეთ ინფორმაცია input თეგებიდან და შემოწმეთ თუ მომხმარებლის მიერ შემოტანილი ინფორმაცია registration სექციაში უდრის authorization სექციაში შეტანილ ინფორმაციას alert - ის საშუალებით გამოუტანეთ 'You have registered successfully', სხვა შემთხვევაში კი 'Your registration is unsuccessful', თუ მომხმარებელი დარეგისტრირდა ერთი და იგივე email - ით გამოიტანეთ 'The email already registered', დარეგისტრირებული მომხმარებელის ინფორმაცია გამოიტანეთ საიტზე


//auhrizations
const autEmail = document.getElementById("autEmail");
const autName = document.getElementById("autName");
const autPass = document.getElementById("autPass");
const autBtn = document.getElementById("autBtn");


//registers
const regEmail = document.getElementById("regEmail");
const regPass = document.getElementById("regPass");
const regBtn = document.getElementById("regBtn");


// registered users list
const usersList = document.getElementById("usersList");



let users = []

autBtn.addEventListener("click", (e) =>{

    e.preventDefault()

    const email = autEmail.value.trim()
    const name = autName.value.trim()
    const password = autPass.value.trim()


    if(!email || !name || !password){
        alert('please fill all fields')
        return
    }

       const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("The email already registered");
        return;
    }

    const Newuser ={
       email,name,password
    }
    users.push(Newuser)

    
      usersList.innerHTML = users.map(user => `<li>${user.name}  ${user.email}</li>`).join("");

    

     autEmail.value = ""
  autName.value = ""
  autPass.value = ""
})


regBtn.addEventListener("click",(ev) =>{
    ev.preventDefault()

    const email = regEmail.value.trim()
    const password = regPass.value.trim()

    if (!email || !password) {
    alert("Please fill all registration fields");
    return
  }

  const userFound = users.find(user => user.email === email && user.password === password);

     if (userFound) {
        alert("You have registered successfully");
    } else {
        alert("Your registration is unsuccessful");
    }


  

    regEmail.value = ""
 regPass.value = ""
})





