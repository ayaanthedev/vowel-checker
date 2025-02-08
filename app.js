function checkVowel() {
    let inputElement = document.getElementById('input');
    let resultElement = document.getElementById('result');
    let errorElement = document.getElementById('error');
    let checknum = inputElement.value.toLowerCase();

    // Clear previous messages
    resultElement.textContent = '';
    errorElement.textContent = '';

    // Validate input
    if (checknum.length !== 1 || !/[a-z]/.test(checknum)) {
        errorElement.textContent = 'Please enter a single English alphabet.';
        return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(checknum)) {
        resultElement.textContent = 'Vowel';
    } else {
        resultElement.textContent = 'It isn\'t a vowel';
    }
}