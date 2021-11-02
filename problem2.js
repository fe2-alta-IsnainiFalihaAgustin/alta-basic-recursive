// Problem 2 - Fibonacci (Recursive)

function fibonacci(number) {
  let fib = [];
  fib[0] = 0
  fib[1] = 1
  if (number == 0) return 0
  if (number == 1) return 1

  for (let i = 2; i <= number; i++){
    fib[i] = fib[i-2]+fib[i-1];
  }
  return fib[number]
}
console.log(fibonacci(0))  // 0
console.log(fibonacci(2))  // 1
console.log(fibonacci(9))  // 34
console.log(fibonacci(10)) // 55
console.log(fibonacci(12)) // 144