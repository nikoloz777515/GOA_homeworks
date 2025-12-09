const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true)

    const path = parsedUrl.pathname
    const method = req.method
    const query = parsedUrl.query

    if(path === '/even-Or-Odd' && method === 'GET'){
        const num = Number(query.num)
        let message = ''

        if(num % 2 === 0){
            message = 'Your number is Even'
        }
        else{
            message = 'Your Number is Odd'
        }

        return res.end(message)
    }
   
})


server.listen(3000,()=>{
    console.log('servis is listen on 3000')
})
// 4) თქვენ უნდა გქონდეთ ბილიკი სახელად /even-Or-Odd აგრეთვე query ?num={num} რომელშიც შეინახავთ რიცხვს, თქვენი დავალებაა, რომ შეამოწმოთ უდრის თუ არა ბილიკი /even-Or-Odd - ს და მეთოდი უდრის თუ არა GET - ს, თუ მოცემული პირობა არის სწორი მაშინ შეამოწმეთ რიცხვი (კენტი თუ ლუწი) და დააბრუნეთ შესაბამისი ტექსტი, მაგალითად 'Your number is even'
