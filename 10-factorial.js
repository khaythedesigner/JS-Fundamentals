function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1; // Factorial of NaN or negative numbers is 1 (by the task rules)
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);
console.log(factorial(arg));
