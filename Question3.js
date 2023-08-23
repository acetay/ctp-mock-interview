// Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to calculate the least common multiple (LCM) of two numbers
function lcm(a, b) {
    if (a <= 0 || b <= 0) {
        return "Both numbers must be positive integers.";
    }
    
    return (a * b) / gcd(a, b);
}

// Test cases
console.log(lcm(6, 15));   // Output: 30
console.log(lcm(3, 17));   // Output: 51
console.log(lcm(5, 7));    // Output: 35
console.log(lcm(9, 12));   // Output: 36
