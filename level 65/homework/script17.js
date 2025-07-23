// 17) შექმენით forEach მეთოდის manual ფუნქცია, ახსენით თითოული ეტაპი კომენტარების სახით     


let arr = ["nikolozi","ana","elza"]

function arreach (array,cb){
    for(let i = 0; i < array.length; i++){
        cb(arr[i])
    }
}

arreach(arr,function(name){
    console.log(name)
})