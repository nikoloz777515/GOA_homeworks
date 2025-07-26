// 10) შექმენით მასივი რომელიც შედგება boolean მნიშვნელობებისგან true, false - ი, თქვენი დავალებაა, რომ map method - ის გამოყენებით გამოიტანოთ true boolean - მნიშვნელობები როგორც 'Yes' და false boolean - მნიშვნელობები როგორც 'No' 
let bolleans = ['true','false']

let newArr = bolleans.map(result => {
    if(result === "true" ){
        return "Yes"}
    else if(result === "false"){
        return "No"}
    
})

console.log(newArr)