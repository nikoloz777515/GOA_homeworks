// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

// function findOutlier(integers){
//     let even = integers.filter(o => o % 2 === 0)
//     let odd = integers.filter(o => o % 2 !== 0)
//     return even.length === 1 ? even[0] : odd[0]
// }




// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript
// function mostMoney(students) {

//     let Maxmoney = 
//       students[0].fives * 5 + 
//       students[0].tens * 10+
//       students[0].twenties 20

//       let winner = students[0].name
//       let same = true

//   for(let i = 1; i < students.length; i++){
//       let money = 
//        students[i].fives 5 + 
//       students[i].tens * 10+
//       students[i].twenties *20

//         if(money > Maxmoney){
//           Maxmoney = money
//           winner = students[i].name
//           same = false
//         }else if(money < Maxmoney){
//           same = false
//         }
//     }
//   return same ? "all" : winner;
// }




// https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript

// function replaceCommon(string, letter) {
//       let max = '';
//       let common = 0;

//     string.split('').forEach(s=>{
//       if(s === ' ') return;

//       const count = string.split(s).length-1
//       if(count > max){
//         max = count
//         common = s
//       }
//     })
//   return string.split(common).join(letter);
// }