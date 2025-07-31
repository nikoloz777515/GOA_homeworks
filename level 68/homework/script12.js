// 12) უნდა გქონდეთ ობიექტი რომელიც ინახავს მომხმარებლებს, თითოეულ მომხმარებელს უნდა ქონდეს isActive კუთვნილება რომლიც მნიშვნელობა არის ან true ან false  - ი. filter - ით დააბრუნეთ ახალი მასივი მხოლოდ იმ მომხმარებლებით რომლის isActive მნიშვნელობა იყო true - ს ტოლი 

let persons = [
    {
        name:'nika',
        isActive: true
    },

    {
        name:'gio',
        isActive: false
    },

    {
        name:'data',
        isActive: false
    },

    {
        name:'luka',
        isActive: true
    },

    {
        name:'goga',
        isActive: false
    },

    {
        name:'nino',
        isActive: true
    }
]
let filteredPersons = persons.filter(fltr => fltr.isActive === true)
console.log(filteredPersons)

