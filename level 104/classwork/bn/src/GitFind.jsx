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
      <h1 className="text-white text-5xl">devFinder</h1>

      <input className="w-[300px] bg-[rgb(18,29,50)]"
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUsr} className="bg-[rgb(16,109,217)] text-white">Search</button>

      {user && (
        <div className="bg-[rgb(31,42,71)] ">
          <h2>{user.name}</h2>
          <p>{user.login}</p>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p>Followers: {user.followers}</p>
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