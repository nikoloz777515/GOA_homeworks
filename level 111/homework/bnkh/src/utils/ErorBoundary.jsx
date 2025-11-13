class ErorBoundary extends React.Component{
    constructor(props){
        super(props)
         this.state = { hasError: false };
    }

    static getDerivedStateFromError(eror){
        return {hasError:true}
    }
}







// 1) თქვენით შექმენით ErrorBoundary - ის class - ი, კარგად გაიაზრეთ, აგრეთვე ყველაფერი ახსენით კომენატრების სახით

// 2) დააინსტალირეთ react-error-boundary ბიბლიოთეკა - და გამოიყენეთ ის შესაბამის კომპონენტებთან