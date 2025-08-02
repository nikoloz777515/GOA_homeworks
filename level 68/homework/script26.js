// 26) შექმენით საგნების ობიექტი, თითოეულს გაუწერეთ ქულები, Object.values(), reduce - ის დახმარებით შეკრიბეთ ამ ობიექტებში არსებული ქულები და დააბრუნეთ საბოლოო შედეგი

const values ={
    art:30,
    sport:40,
    georgaphy:40,
    math:50,
    fizika: 30
}


let Objvalues = Object.values(values).reduce((sum,scr) => sum + scr )
console.log(Objvalues)