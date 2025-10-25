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
        <div>
      <h1>devFinder</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUsr}>Search</button>

      {user && (
        <div>
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