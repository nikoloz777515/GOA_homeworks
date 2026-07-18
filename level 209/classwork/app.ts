// 1) შექმენით Type Guard typeof გამოყენებით ფუნქციაში სადაც პარამეტრის ტიპი Union არის
function format (value: string | number):string{
  if (typeof value === "string") {
    return `text: ${value.toUpperCase()}`;
  } else {
    return `number: ${value.toFixed(2)}`;
  }
}
// 2) შექმენით საკუთარი ობიექტის ტიპი, შემდეგ ფუნქცია რომელსაც პარამეტრად ორი საკუთარი ტიპის აგერთიანებას დაუწერთ და გამოიყენეთ in ოპერატორი
type Car = {
  drive: () => void;
  wheels: number;
};

type bike = {
  ride: () => void;
  wheels: number;
};

function travel(vehicle: Car | bike) {
  if ("drive" in vehicle) {
    console.log("start ridfing on road:");
    vehicle.drive(); 
  } else {
    console.log("start riding on hiils :");
    vehicle.ride();
  }
}

// 3) ახსენით კომენატრებით რა განსხვავებაა typeof სა და in შორის
//typeof ვიყენებთ პრიმიტიული ტიპების შეამოწმებლად
//და რაც შეეხება in ოპერატორს ვიყენებთ უმეტესად ობიექტების სტრუქტურების შესამოწმებლად და ამოწმებს არის თუარა key ან რაიმე კონკრეტულ ობიექტში და მაშინაა კარგი როცა გვინდა გავიფოთ გაერთიანებული რომელი ობიექტი ვნახოთ