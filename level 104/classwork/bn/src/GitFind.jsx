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
      <h1 className="text-white text-2xl text-center relative top-[100px] mr-[510px] font-bold">devFinder</h1>


      <input className="w-[600px] h-[60px] bg-[rgb(31,42,71)] ml-[450px] relative top-[100px] rounded-2xl text-white "
        type="text"
        placeholder="Search GitHub username_"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUsr} className="bg-[rgb(16,109,217)] text-white relative top-[50px] ml-[950px] rounded-lg h-[40px] w-[80px]">Search</button>

      {user && (
        <div className="bg-[rgb(31,42,71)] text-white relative top-[130px] w-[600px] ml-[450px] h-[400px] rounded-2xl">
          <h2 className="relative ml-[160px] top-[30px] font-bold">{user.name}</h2>

          <p className="text-[rgb(16,109,217)] relative ml-[160px] top-[30px]">{user.login}</p>
          <img className="rounded-full ml-[30px] relative bottom-[25px]"
            src={user.avatar_url}
            alt="avatar"
            width="100"
            
          />
        <div className="bg-[rgb(20,29,46)] w-[420px] h-[60px] flex justify-center gap-[30px] rounded-lg ml-[130px] relative top-[50px]">
          <p className="">Followers: <br/> <span className="font-black">{user.followers}</span></p>
          <p>Following: <br/> <span className="font-black">{user.following}</span></p>
          <p>Public repos: <br/> <span className="font-black">{user.public_repos}</span></p>
            
        </div>
        <p className="text-[rgb(147,155,170)] relative bottom-[175px] ml-[400px]">

                Joined {new Date(user.created_at).toLocaleDateString()}
              </p>
           <p className="relative bottom-[130px] ml-[165px] text-[rgb(147,155,170)]">
            {user.bio || "This profile has no bio"}
          </p>

              <p className="ml-[100px] relative top-[25px]">📍 {user.location || "Not Available"}</p>

               <p className="ml-[90px] relative top-[30px]">
              🌐
              {user.blog ? (
                <a
                  href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  className="text-blue-400"
                >
                  {user.blog}
                </a>
              ) : (
                "Not Available"
              )}
            </p>

            <p className="ml-[400px] relative top-[10px]">🏢 {user.company || "Not Available"}</p>


          <p className="ml-[400px] relative bottom-[45px]">
              🐦
              {user.twitter_username ? (
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  className="text-blue-400"
                >
                  @{user.twitter_username}
                </a>
              ) : (
                "Not Available"
              )}
            </p>


          <a href={user.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}
    </div>
    )

}


export default GitFind;