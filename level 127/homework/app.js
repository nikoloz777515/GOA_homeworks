// https://www.codewars.com/kata/5b7176768adeae9bc9000056/train/javascript


// https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
// function groupByCommas(n) {
//     return n.toLocaleString()
// }


// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

// function solve(arr){
//   freq = {}
  
//   for(let num of arr){
//     freq[num] =(freq[num] || 0) + 1
//   }
//   return arr.sort((a,b)=>{
//     if(freq[a] === freq[b]){
//       return a - b
//     }
    
//     return freq[b] - freq[a]
//   })
// }


// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// function alphabetPosition(text) {
//   let alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   let result = []
//   text = text.toLowerCase()
//   for(let i =0; i < text.length; i++){
//     let index = alp.indexOf(text[i])    
//       if(index != -1){
//     result.push(index +1)
//   }
//   }
  

//   return result.join(' ')
// }


// https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

// function palindrome(string) {
//   let words = string.toLowerCase().replace(/[^a-z0-9]/g, '')
  
//   return words === words.split('').reverse().join('')
// }