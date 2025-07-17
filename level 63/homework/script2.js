// 2) შექმენით arrow function რომელიც იღებს ორ პარამეტრს პირველი, string - ი, მეორე, string ების მასივი, თქვნმა ფუნქციამ უნდა შეამოწმოს იმ შემთხვევაში თუ გადმოცემული string - ი არ არის მასივში მაშინ ჩაამტეთ ის ახალ ცარიელ მასივში, საბოლოოდ კი დაბეჭდეთ მოცემული მასივი




let list = ['niko','ana','atuka','gio']

let string = ['niko','ana','atuka','gio','luka']

let arrow = (string,list) =>{
        if(!list.includes(string)){
            string.push(list)
        }

        
}

console.log(list)
