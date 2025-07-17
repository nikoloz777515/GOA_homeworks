const filter = function(arr, helper){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(helper(arr[i]) === true) {
            result.push(arr[i])
        }
    }

    return result;
}


const includesI = function(value) {
    return value.includes('i');
}

const names = ["Luka", "Lile", "Nia"];

const filteredArr = filter(names, includesI);

console.log(filteredArr)