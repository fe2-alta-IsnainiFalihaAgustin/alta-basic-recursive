// Prima ke X (Tanpa Recursive)

function primeX(number) {

  let counter = 0
  let num = 1

  while (counter < number) {
    num++
    if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0 || num == 2 || num == 3 || num == 5 || num ==7) {
      counter++
    }
  }
  return num
}
console.log(primeX(1))  // 2
console.log(primeX(5))  // 11
console.log(primeX(8))  // 19
console.log(primeX(9))  // 23
