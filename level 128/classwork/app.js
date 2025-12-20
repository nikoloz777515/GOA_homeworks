const express = require('express')

const app = express()
app.use(express.json());

const books = [
  {
    id:1,
    title: "ვეფხისტყაოსანი",
    author: "შოთა რუსთაველი",
    year: 1200,
   
  },
  {
    id:2,
    title: "დათა თუთაშხია",
    author: "ჭაბუა ამირეჯიბი",
    year: 1973,
    
  },
  {
    id:3,
    title: "ჯინსების თაობა",
    author: "დათო ტურაშვილი",
    year: 2008,
    
  }
]

app.get('/books',(req,res)=>{
  res.json(books)
})

app.post('/books',(req,res)=>{
    const newBook ={
      id :books.length + 1,
      title: req.body.title,
      author: req.body.author,
      year: req.body.year
    }
    books.push(newBook)

    res.status(201).json(newBook)
})

app.delete('/books/:id',(req,res)=>{
    const Bookid = Number(req.params.id)

  const bookindex = books.findIndex(b => b.id === Bookid)

  const deletedBook = books.splice(bookindex, 1)
  res.json({ message: "Book is Deleted", book: deletedBook[0] })
})

app.listen(3000,()=>{
  console.log('server is listen on 3000')
})


// 1) შექმენით მასივი სადაც  შეინახავთ წიგნების ობიეტებს, მოუსმინეთ POST მოთხოვნას '/books' ბილიკზე, postman - ის გამოყენებით გააგზავნეთ წიგნის ინფორმაცია, მოცემული ობეიქტი კი ჩასვით books მასივში და მიანიჭეთ შესაბამისი id

// 2) ასევე უნდა შეგეძლოთ მოცემული წიგნების id - ის და id - ის გარეშე წამოღება

// 3) მოუსმინეთ DELETE მეთოდსაც და გადმოცემული id - ით books მასივში არსებული წიგნი წაშალეთ