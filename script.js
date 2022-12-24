const generateBtn = document.getElementById('generate');
const passwordTextarea = document.getElementById('password');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

generateBtn.addEventListener('click', () => {
  // prompt for user to enter the user's criteria
  const passwordLength = prompt('Enter the desired length of your password (8-128 characters):');
  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length');
    return;
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('You must select at least one character type');
    return;
  }

  // Generate the password
  let password = '';
  while (password.length < passwordLength) {
    if (includeLowercase) {
      password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (includeUppercase) {
      password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (includeNumeric) {
      password += numericChars[Math.floor(Math.random() * numericChars.length)];
    }
    if (includeSpecial) {
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
    }
  }

  // Display the generated password
  passwordTextarea.textContent = password;
});
