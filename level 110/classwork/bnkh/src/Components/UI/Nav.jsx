import { Link } from "react-router";
import Profile from "../../Profile";

const Nav = () =>{
    return(

  
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link> </li>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li><Link to={'/profile'}>profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;



// 4) შექმენით ლოგიკა Nav კომპონენტში, თუ მომმხარებელი ავტროიზირებულია გამოიტანეთ მხოლოდ ორი ბილიკი home და logout, თუ არ არის ავტროიზრებული გამოიტანეთ login და register, შემდეგ შექმენით კონტექსტში logout ფუნქცია და მიანიჭეთ ,<li>Logout</li> ელემენტis onClick ატრიბუტსა