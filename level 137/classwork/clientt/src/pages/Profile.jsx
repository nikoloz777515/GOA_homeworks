import { useAuth } from "../context/authContext"

const Profile = () =>{
  const {user} = useAuth()

  return(
    <section>
      <h1>Profile Page</h1>

      <p>username: {user.username}</p>
      <p>email: {user.emai}</p>
    </section>
  )
}

export default Profile