
import { Routes, Route } from 'react-router-dom'; 
import Login from './login';
import Register from './register';
import Nav from './Components/UI/Nav';
import Profile from './Profile';


function App() {
  return (
  <>
  <Nav />
  
    <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

    </Routes>
  </>
  );
}

export default App;


// 1) გადმოიწერეთ react-router ბიბლიოთეკა, შემდეგ გადადით main.jsx ში და გამოიყენეთ BrowserRouter კომპონენტი, შემდეგ გადადით App.jsx ში და გამოიყენეთ Routes კომპონენტი რომ თავი მოუყაროთ სხვადახვას შესაძლო ბილიკებს, Routes კომპონენტში კი შექმენით შესაძლო მისამართები Route კომპონენტით, სადაც მოგიწევთ path და element ატრიბუტების გამოყენება (შექმენით 3 შესაზლო ბილიკი, /, /login, /register და მიანიჭეთ შესაბამისი კომპონენტები)
// import { BrowserRouter } from 'react-router';