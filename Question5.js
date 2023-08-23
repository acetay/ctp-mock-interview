// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to compute the sum of prime numbers up to a given number
function sumPrime(limit) {
  if (limit <= 0 || !Number.isInteger(limit)) {
    return "Input must be a positive integer.";
  }

  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// Test cases
console.log(sumPrime(10)); // Output: 17
console.log(sumPrime(15)); // Output: 41
console.log(sumPrime(20)); // Output: 77
console.log(sumPrime(1)); // Output: 0
