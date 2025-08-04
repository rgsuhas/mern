function isPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');        
    if (cleanedInput === reversedInput) {
        alert('The input is a palindrome.');
    } else {
        alert('The input is not a palindrome.');
    }
}

