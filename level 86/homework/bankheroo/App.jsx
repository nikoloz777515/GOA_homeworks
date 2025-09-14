// 3) შექმენით vite გამოყენებით, პროექტი სახელად bankhero, რომლის app ფაილშიც დაამატეთბ main elements 5 სექციით

import Footer from "./src/components/footer"
import Nav from "./components/Nav"

function App() {
return(
  <main>
    <Footer/>
    < Nav/>
  </main>
)
}


export default App

// // src/App.jsx
// import Nav from './nav';  // აქ შემოგაქვს Nav კომპონენტი

// function App() {
//   return (
//     <div>
//       <Nav /> {/* აქ ვიძახებთ Nav კომპონენტს */}
//     </div>
//   );

// export default App;

