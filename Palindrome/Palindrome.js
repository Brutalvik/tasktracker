const isPalindrome = (input) => {
    const len = input.length;
    for (let i = 0; i < len / 2; i++) {
        if (input[i] !== input[len - 1 - i]) {
            return 'Not a Palindrome';
        }
    }
    return 'Palindrome';
}
const value = isPalindrome("racecar");
console.log(value);

// Tested with a few words, including the ones given in the task sheet.

