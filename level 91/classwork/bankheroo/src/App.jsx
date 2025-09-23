import { useState } from 'react'
import Hero from './Hero'


function App() {
  
  return (
   <main>
    <Hero  title = "Bankhero" description ="this is bank site"/>
  



     <Hero title="Hero Two" description="This is the second hero">
        <p>first paragraph</p>
        <p>Second paragaph</p>
      </Hero>
   </main>
  )
}

// children არის სპეციალური prop რეაქთში და ის იღებს იმ არგუმენტებს რომლებიც კომპონენტის თეგებშა ჩსმული ანუ ჩილდრენი ხდება ის რაც მშბელი ელემენტის თეგებშა მოცემული

export default App


// 1) შექმენით Hero ცომპონენტი, რომელსაც გადასცემთ ორ ატრიბუტს სათაური და აღწერა (title and description) შემდეგ გამოიძახეთ ეგ კომპონენტი კონტაინერ ელემენტის სახით და გადაეცით თავიდან ერთი ელემენტი და შემდეგ ორი ელემენტი, გატესტეთ და კომენტარებიტ ახსენით როგორ მუშაობს children კუთვნილება
