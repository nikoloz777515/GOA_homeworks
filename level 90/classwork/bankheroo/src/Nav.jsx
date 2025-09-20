
function Nav(props) {
    console.log(props)
    return(
        <nav style={{backgroundColor:props.bgColor}}>
            <li>
            About us
            <ul>
                    Bye bye
                </ul>
            </li>

            <h1>{props.title}</h1>
        </nav>
        

        
    )
}

export default Nav


// 1) შექმენით კომპონენტი სახელად Nav, რომელსაც ატრიბუტების სახით გადასცემთ 3 მნიშვნელობას, title, textColor, bgColor, სათაური გამოიყენეთ h1 სთვის, შემდეგ textColor გამოიყენეთ ტექსტის ფერების შესაცვლელად  nav კომპონენტში და bgColor ნავ კომპონენტის უკანა ფერის შესაცვლელად (მოიძიეთ ინტერნეტში როგორ ხდება გასტილვა inlineსახით reactში და აუცილებლად ახსენით კომენტარებით რა არის props)