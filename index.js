// Select the password input element
let passwordEl = document.getElementById("password-el");

// Function to generate the password
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-{}[]:<>?/,|~` ";

    let allowedChars = "";
    let password = "";

    // Add selected character sets to allowed characters
    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // Validate length and character sets
    if (length < 1) {
        return '(password length must be at least 1)';
    } else if (allowedChars.length === 0) {
        return '(At least one set of characters needs to be selected)';
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Generate and display password on button click
function displayPassword() {
    const passwordLength = 14;
    const includeLowerCase = true;
    const includeUpperCase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    passwordEl.value = password;
}

console.log(`Generated password: ${generatePassword(14, true, true, true, true)}`);
