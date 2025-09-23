

function Hero({ title,description,children}){
    return(
    <div>
        <h2>{title}</h2>

        <p>{description}</p>

        <div>
            {children}
        </div>
    </div>
    )
}

export default Hero


// 1) შექმენით Hero ცომპონენტი, რომელსაც გადასცემთ ორ ატრიბუტს სათაური და აღწერა (title and description) შემდეგ გამოიძახეთ ეგ კომპონენტი კონტაინერ ელემენტის სახით და გადაეცით თავიდან ერთი ელემენტი და შემდეგ ორი ელემენტი, გატესტეთ და კომენტარებიტ ახსენით როგორ მუშაობს children კუთვნილება