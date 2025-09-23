function User(props){
    return(
    <div>
       <h1>{props.name}</h1>
       <h2>{props.age}</h2>
       <h3>{props.email}</h3>
    </div>
    )
}


export default User;


// 4) შექმენით კომპონენტი სახელად User რომელიც props - ად იღებს name, age, email და გამოაქვს ისინი ეკრანზე, გამოიძახეთ User კომპონენტი მთავარ App.jsx - ის ფაილში და გადაეცით props - ად შესაბამისი მნიშვნელობები
