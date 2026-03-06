class AppError extends Error{
  constructor(message,statusCode){
    super(message)

    this.statusCode = statusCode

    this.status = `${statusCode}`.startsWith('4')? "fail": "error"

    this.isOperational = true
  }
}
module.exports = AppError

// 2) შექმენით class სახელად AppError რომელმაც მემკვიდრეობით უნდა მიიღოს Error კლასიდან კუთვნილებები/მეთოდები (იმისათის რომ დაემსგავსოს ერორს და არა რაღაცა დეველოპერის მიერ შექნილ აჯაფსანდალს), შემდეგ კონსტურქტორში გაუწერეთ ოპრი პარამეტრი message, statusCode, გამოიყენეთ super რომ გამოიძაღოთ მშობელი კლასის კონსტრუქტორი და გადაეცით მესიჯი, შემდეგ მიანიჭეთ სტატუს კოდი თქვენივე კონსტრუქტორში, აგრეტე status თუ 4 იწყება fail თუ არადა error და საბოლოოდ isOperational (გჭირდება იმისათსი რომ გაიგო იყო თუ არა მოსალოდნელი ანუ შენით შექმნილი ერორი)