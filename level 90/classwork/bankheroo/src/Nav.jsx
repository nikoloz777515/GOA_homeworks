
function Nav(props) {
    console.log(props)
    return(
        <nav style={{color:props.color,backgroundColor: props.backgroundColor}}>

            <title>{props.title}</title>


            <h1>{props.heading}</h1>

          
        </nav>
        

        
    )
}

export default Nav;


// 1) შექმენით კომპონენტი სახელად Nav, რომელსაც ატრიბუტების სახით გადასცემთ 3 მნიშვნელობას, title, textColor, bgColor, სათაური გამოიყენეთ h1 სთვის, შემდეგ textColor გამოიყენეთ ტექსტის ფერების შესაცვლელად  nav კომპონენტში და bgColor ნავ კომპონენტის უკანა ფერის შესაცვლელად (მოიძიეთ ინტერნეტში როგორ ხდება გასტილვა inlineსახით reactში და აუცილებლად ახსენით კომენტარებით რა არის props)