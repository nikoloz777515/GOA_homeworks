const API_URL = 'http://localhost:3000/api'
function App() {

  const handleSubmit = async (e) =>{
      e.preventDefault()

      const data ={
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      e.target.reset()

      try{
        const res = await fetch(API_URL + '/signup',{
          method:'POST',
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })

      }catch(err){
          console.log(err)
      }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" required/>
        <input type="email" name="email" required/>
        <input type="password" name="password" required/>
        <button>Sumbit</button>
      </form>
    </main>
  )
}

export default App

// 1) შექმენით React_ით სარეგისტრაციო ფორმა სადაც მომხმარებელს შეეძლება username, email და password შეტანა

// npm create vite@6.3.0
// 2) შექმენით სერვერის ფოლდერი, სადაც გექნებათ controllers, routers, utils და database ფოლდერი, დაამატეთ auth.controller/router ფაილები, სადაც დაწერთ რეგისტრაციის ლოგიკას, შემდეგ users.json მონაცემთა ბაზის ფოლდერში სადაც საწყისად შეინახავთ ცარიელ მასივს.