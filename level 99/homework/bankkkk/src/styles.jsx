

function Styles (){
    const style ={
        background: 'green',
        color: 'black',
        height: "80px"
    }

    const divStyle ={
        textAlign: "center",
        padding: "20px"
    }
    return(
    <div style={divStyle}>
        <h1 style={{color: 'red', background: 'green'}} >This is h1</h1>
        <p style={style}>This is p</p>
    </div>
    )
}


export default Styles;
// 2) React styles - სექციის გავლის შემდეგ გააკეთეთ რამოდენიმე მაგალითი, შეგიძლიათ რომ ნასწავლი მასალა style - ების შესახებ გამოიყენოთ თქვენს პროექტში