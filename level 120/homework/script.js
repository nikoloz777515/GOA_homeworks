// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/python
// def sort_by_bit(arr):
    // return arr.sort() or arr.sort(key = int.bit_count)


// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// function generateHashtag (str) {
//     const words = str.trim().split(/\s+/).filter(w=> w.length > 0)
    
    
//   if (words.length === 0) return false;
    
//     const hastag = "#" + words.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join("")
    
//     if (hastag.length > 140) return false;
  
//    return hastag;
// }



// https://www.codewars.com/kata/5a00a8b5ffe75f8888000080/train/python
// def replace_zero(arr):
//     max = 0
//     T = -1
//     lewa = 0
//     zero = -1
//     for i in range(len(arr)):
//         if arr[i] == 0:
//             lewa = zero + 1
//             zero = i
//         s = i - lewa + 1
//         if s > max:
//             max = s
//             T = zero
//         if s > max or (s == max and zero > T):
//             max = s
//             T = zero
//     return T