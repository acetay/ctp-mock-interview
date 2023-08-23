// This function checks if a given year is a leap year or not.
function isLeapYear(year) {
  // Check if the input is not a valid positive integer year
  if (typeof year !== "number" || year <= 0 || !Number.isInteger(year)) {
    // Return an error message if the input is invalid
    return "Invalid input. Please provide a positive integer year.";
  }

  // Check if the year is divisible by 400 or if it's divisible by 4 but not by 100
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    // If the conditions are met, return a message indicating it's a leap year
    return `${year} is a leap year.`;
  } else {
    // If the conditions are not met, return a message indicating it's not a leap year
    return `${year} is not a leap year.`;
  }
}

// Test cases
console.log(isLeapYear(2004)); // Output: "2004 is a leap year."
console.log(isLeapYear(1999)); // Output: "1999 is not a leap year."
console.log(isLeapYear(1900)); // Output: "1900 is not a leap year."
console.log(isLeapYear(2000)); // Output: "2000 is a leap year."
