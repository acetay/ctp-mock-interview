function isPalindrome(word) {
    // Convert the word to lowercase and remove spaces and symbols
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, '');

    // Compare characters from the start and end of the sanitized word
    for (let i = 0; i < Math.floor(sanitizedWord.length / 2); i++) {
        if (sanitizedWord[i] !== sanitizedWord[sanitizedWord.length - 1 - i]) {
            return false; // Not a palindrome
        }
    }
    
    return true; // It's a palindrome
}

// Test cases
console.log(isPalindrome("race car"));        // Output: true
console.log(isPalindrome("potato fries"));   // Output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("Hello World"));    // Output: false
