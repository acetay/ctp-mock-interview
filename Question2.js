function getRemainder(dividend, divisor) {
  if (divisor === 0) {
    return "Cannot divide by zero.";
  }

  // Find how many times the divisor can be subtracted from the dividend
  while (dividend >= divisor) {
    dividend -= divisor;
  }

  return dividend;
}

// Test cases
console.log(getRemainder(10, 2)); // Output: 0
console.log(getRemainder(100, 6)); // Output: 4
console.log(getRemainder(17, 5)); // Output: 2
console.log(getRemainder(7, 3)); // Output: 1
console.log(getRemainder(0, 7)); // Output: 0
console.log(getRemainder(15, 0)); // Output: "Cannot divide by zero."
