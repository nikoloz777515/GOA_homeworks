const numbers = [5, 12, 4,6,7,8]
const oddNumbers = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]); 
  }
}

