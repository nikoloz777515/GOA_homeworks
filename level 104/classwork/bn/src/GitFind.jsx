import {  useState } from "react";


function GitFind(){
    const [userName, setUsername] = useState("")
    const [user, setUser] = useState(null)

    const fetchUsr = async () =>{
        try{
            const res = await fetch(`https://api.github.com/users/${userName}`)
            const data = await res.json()
            setUser(data)

            console.log(data)
        }catch(err){
            alert("something is wrong")
        }
    }
    return(
        <div className="bg-[rgb(20,28,47)] min-h-screen">
      <h1 className="text-white text-5xl text-center ">devFinder</h1>


      <input className="w-[500px] h-[60px] bg-[rgb(18,29,50)] ml-[400px] relative top-[100px] "
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUsr} className="bg-[rgb(16,109,217)] text-white relative top-[50px] ml-[740px] rounded-lg h-[40px] w-[80px]">Search</button>

      {user && (
        <div className="bg-[rgb(31,42,71)] text-white relative top-[250px] w-[600px] ml-[450px] h-[300px]">
          <h2>{user.name}</h2>
          <p>{user.login}</p>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p className="text-red-600">Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}
    </div>
    )

}


export default GitFind;