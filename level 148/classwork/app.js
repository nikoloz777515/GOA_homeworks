// 1) posts კოლექციაში გამოიყენეთ curd 2 ნასწავლი ყველა მეთოდი, შექმენით პოსტები ამ მეთოდების შესახებ და დაწერეთ მათი ახსნები content კუთვნილებაში თავისი სათაურით

// db.posts.insertOne({name: "Niko",title: "My first Post",likesCount: 13})

//db.posts.insertMany([{name: "Gio",title: "Js",likesCount: 30}, {name: "Data",title: "react",likesCount: 3}, {name: "Luka",title: "python"}])


//db.posts.updateOne({title: "Second Post"},{$set: {likesCount: 60}})

//db.posts.updateOne({ title: "React" },{ $push: { tags: "library" } })

//db.posts.updateOne({ title: "Mongo" },{ $set: { likesCount: 10, author: "Nika" } },{ upsert: true })


//db.posts.updateMany({ title: "Js" },{ $set: { featured: true } })

//db.posts.updateOne({ "author.name": "Gio" },{ $set: { "author.age": 25 } })




//  {
//     title: "insertOne",
//     content: "insertOne ეს მეთოდი გამოიყენება ერთი დოკუმენტის ჩასამატებლად კოლექციაში იგი იღებს ერთ ობიექტს და ამატებს მას MongoDB ის კოლექციაში"
//     likesCount: 10
//   }

//   {
//     title: "insertMany",
//     content: "insertMany ეს მეთოდი გამოიყენება რამდენიმე დოკუმენტის ერთად ჩასამატებლად კოლექციაში იგი იღებს მასივს რომელიც შეიცავს რამდენიმე ობიექტს",
//     likesCount: 15
//   }

//   {
//     title: "updateOne",
//     content: "updateOne მეთოდი აახლებს მხოლოდ ერთ დოკუმენტს, რომელიც შეესაბამება ჩვენს ფილტრაციას ხშირად გამოიყენება $set ოპერატორთან ერთად კონკრეტული ველის შესაცვლელა",
//     likesCount: 20
//   }

//   {
//     title: "updateMany",
//     content: "updateMany ეს მეთოდი ანახლებს ყველა დოკუმენტს რომელიც აკმაყოფილებს მითითებულ პირობას გამოვიყენებთ  ერთნაირი ცვლილებების ბევრ დოკუმენტზე გასაკეთებლად",
//     likesCount: 25
//   }

//   {
//     title: "Updating Arrays",
//     content: "MongoDB ში arrayის განახლება შესაძლებელია $push ოპერატორით. $push ამატებს ელემენტს",
//     likesCount: 18
//   },

//   {
//     title: "Upsert",
//     content: "Upsert ნიშნავს update ან insert ოპერაციას. თუ დოკუმენტი არ მოიძებნა MongoDB ავტომატურად შექმნის ახალს, როდესაც გამოყენებულია upsert: true"
//     likesCount: 30
//   },

//   {
//     title: "Embedded Document Update",
//     content: "Embedded documentის განახლება ხდება dot notation ანუ . ის გამოყენებით მაგალითად author.age. ეს საშუალებას გვაძლევს შევცვალოთ შიდა ობიექტის კონკრეტული ველი"
//     likesCount: 22
//   }



// 2) გამოიყენეთ deleteOne, deleteMany და replaceOne პრაქტიკაში და ახსენით მათი დანიშნულება

// deleteOne შლის ერთ ობიექტს მას გადავცემთ პირობას და იმუშავებს იმ პირობის მიხედვით

//deleteMany შლის რამდენიმე ობიექტს მას გადავცემთ იმ პირობებს რა პირობებითაც უნდა იმუშაოს და წაშლის იმ ობიექტებს რომლებიც პირობას დააკმაყოფილებენ

//replaceOne შეცვლის დოკუმენტს მთლიანად გადაეცემა query რა დოკუმენტი უნდა შეცვალოს და კიდევ გადაეცემა რითი უნდა შეიცვალოს
