// 11) მომხმარებელს შემოატანინეთ ფერი red, green, yellow, ფერების მიხედვით დააბრუნეთ slow, stop, go

const input = prompt("enter color red green yelloow")

switch(input){
    case('red'):
    console.log('slow')
    break;
    case('green'):
    console.log('stop')
    break;
    case('yellow'):
    console.log('go')
    default:
        console.log("wrong color try again")
}