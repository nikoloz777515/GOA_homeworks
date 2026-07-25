import express, { Request, Response } from 'express';

const app = express()

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'გამარჯობა, Express + TypeScript მუშაობს!' });
});

app.listen(3000, ()=>{
  console.log('server is listen on port 3000')
})
// 6) შექმენით express + typescript პროექტი და გააკეთეთ ts კონფიდგურაცია