// 1) შექმენით პროექტი, სადაც გექნებათ ერთი სექცია Add Car, იქნება ფორმა სადაც, მომხმარებელი შეიყვანს მანქანის მონაცემებს როგორიცაა make, model, year. თქვენი დავალებაა რომ მომხმარებლის მიერ ჩაწერილი ინფორმაცია input - ებიდან წამოიღოთ და დაამატოთ cars მასივში (cars მასივი თავიდან უნდა იყოს ცარიელი) ეს მასივი უნდა დაემატოს localStorage - ში (ლოკალურ ბაზაში), ინფორმაციის დადასტურების შემდეგ უნდა შეიქმნას ერთი ცხრილი სადაც ჩაამტებთ მანქანის შესახებ მონაცემებს თითოეულ მანქანას უნდა მიენიჭოს უნიკალური ID, უნდა გქონდეთ delete Car ღილაკი რომელზე დაჭერისას ცხრილიდან და ლოკალური ბაზიდან უნდა წაიშალოს მანქანა, ეს გააკეთეთ class - ების გამოყენებით + დაუმატეთ გასტილვა

let form = document.querySelector("form")

let cars = JSON.parse(localStorage.getItem("cars")) || []

class Car{
    constructor(make,model,year){
        this.id = Date.now();
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
class Carshow{
static addCar(car){
        cars.push(car)
       this.saveToLocalStorage()
   }

static deleteCar (id){
    cars = cars.filter(car => car.id !== id)
    this.saveToLocalStorage();
    this.renderTable();
   }
static saveToLocalStorage(){
    localStorage.setItem("cars", JSON.stringify(cars))
   }
static renderTable(){
    let oldTable = document.querySelector("table")
    if(oldTable) oldTable.remove()
        if(cars.length === 0) return;
    
let table = document.createElement("table")
table.border = "1"
table.innerHTML = `
    <tr>

    <th>ID</th>
    <th>Make</th>
    <th>Model</th>
    <th>Year</th>
    <th>Action</th>
    
    </tr>
`;

cars.forEach(car =>{
    let row = document.createElement("tr")
    row.innerHTML = `
    
    <td>${car.id}</td>
    <td>${car.make}</td>
    <td>${car.model}</td>
    <td>${car.year}</td>
    <td><button class="delete-btn" data-id="${car.id}">Delete</button></td>
    
    `;
    table.appendChild(row)
})
document.body.appendChild(table)

document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        let id = Number(e.target.getAttribute("data-id"));
        Carshow.deleteCar(id); 
    })
})
}
}

form. addEventListener("submit",(e) =>{
    e.preventDefault()

    let make = form.make.value.trim();
    let model = form.model.value.trim();
    let year = form.year.value.trim();

    if(!make || !model || !year){
        alert("please fill all field")
        return;
    }

    let car = new Car(make,model,year)
    
    Carshow.addCar(car)

    form.reset();
})

Carshow.renderTable()