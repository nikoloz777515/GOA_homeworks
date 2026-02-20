import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import ProductList from "./components/productList";
import ProductDetails from "./components/ProductDetail";

function App()  {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App;

// 1) შექმენით vite გამოყენებით რეაქთის პროექტი, დაამატეთ Admin.jsx pages ფოლდერში და ProductContext.jsx context ფოლდერში, შემდეგ შექმენით createProduct ფუნქცია კონტექსტში რომელის აგზავნის მოთხოვნას ჩვენი სერვერის იმ API_URL ზე სადაც ხდება პროდუქტის შემქნა, დააკავშირეთ ეს ფუნქცია ადმინ პანელში შექმნილ ფორმასთან



// 1) პროექტს რომელზეც ახლა მუშაობთ server, client - ის მხარეს დაუმატეთ login, signup - ფუნქციებიც