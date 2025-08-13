//  2) შექენით Promise უნდა გადაეცეს ორი ფუნქცია resolve, reject - მასში შექმენით ერთი ცვალდი სადაც შეინახავთ საათს, შეამოწმეთ იმ შემთხვევაში თუ ცვალდში შენახული საათის მნიშვნელობა უდრის ამჟამინდელ საათს გამოიძახეთ resolve ფუნქცია და დააბრუნეთ მნიშვნელობა "Your time matches my current local time" სხვა შემთხვევაში კი გამოიძახეთ reject - ი და გადაეცით მნიშვნელობა "Your time does not match to my current local time" მინიშნება გამოიყენეთ Date ჩაშენებული ობიექტი


let prm = new Promise((resolve,reject) =>{
        let myTime = "13:23"

        const now = new Date();

    if(myTime === now){
        resolve("Your time matches my current local time")
    }
    else{
        reject("Your time does not match to my current local time")
    }
})


prm.then(tm => console.log(tm))
.catch(td => console.log(td))