// <!-- 4) შექმენით ერთი მასივი, შეინახეთ მასში ფილმები, შექმენით მეორე ცვლადი შეინახეთ მასში თქვენი საყვარელი ფილმი, ternary operator - ის გამოყენებით შეამოწმეთ თუ მასივი შეიცავს თქვენს ფილმს მაშინ გამოიტანეთ რომ "The Film That You Chose Is In The List" სხვა შემთხვევაში კი "The Film That You Chose Is Not In The List" -->



const myFavFilm = 'who am i'


let films =["tokyo-drift","who am i","Rambo","snowfall","Grinch"]

films.includes(myFavFilm) ? window.alert("The Film That You Chose Is In The List"): window.alert("The Film That You Chose Is Not In The List")