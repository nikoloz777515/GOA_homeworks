import React from "react"

export class ErorBoundary extends React.Component{
    constructor(props){
        super(props)
         this.state = { hasError: false };
    }

    static getDerivedStateFromError(erorr){
        return(
            {erorr}
        )
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>erorr</h1>
                </div>
            )
        }
        return this.props.children
    }
}




// 2) შექმენით სტატიკური მეთოდი, რომელიც შვილი ელემენტის მიერ წარმოქმნილ ერორს დაიჭერს და მიანიჭებს მდგომარეობას, საბოლოოდ კი render მეთოდიში განსზაღვრეთ სათადარიგო კომპონენტი უნდა დაარენდეროთ თუ ჩვეულებრივი შვილი კომპონენტები


// 1 ) შექმენით ErrorBoundary class component