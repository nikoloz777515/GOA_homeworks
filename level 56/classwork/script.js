


// let me = {
//         firstname:'Nikoloz ', 
//         lastname: 'kvelashvili',
//          age: 15, 
//         city:'Gori',
//         hoby:'coding'
// }

// console.log(me);

// ობიექტი არის სტრუქტურა რაღაც რომელიც ინახავს მონაცემებს 


// ობიექტი იმით განსხვავდება მასივისგან რო მასივში ელემენტებს ინდექსებით ვიძახებთ ობიექტში კი სახელებით 








// 2) შექმნილ ობიექტში დაამტეთ და წაშალეთ ერთი კუთვნილება, ჩააშენეთ მეორე ობიექტი თქვენს შექმნილ ობიექტში

let me = {
    firstname: 'Nikoloz', 
    lastname: 'kvelashvili',
    hoby: 'coding',         
    city: 'Gori',
    age: {
        month: 'January'    
    }
};


me.age = 20;        


delete me.city;       

console.log(me.age); 