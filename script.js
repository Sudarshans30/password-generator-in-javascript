// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Firstly, we need to create a function to select random characters from an array using Fisher Yates shuffle, for which we need to create an algorithim to shuffle.
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }


  return array;
}

// Function to create random integer
function getRandomnumb(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var specialCharacters = [  "!", 
                          "#",  
                          "$",
                          "%",
                          "&",    
                          "(",     
                          ")",    
                          "*",    
                            "+",    
                          "-",    
                          ".",    
                          "/",    
                            ":",     
                           ";",    
                           "<",     
                            "?",     
                            "@",     
                            "[",     
                            "]",     
                            "^",     
                            "_",     
                            "`",     
                            "{",     
                            "|",     
                            "}",     
                            "~",     
                            "]" ];
  var numbers = ["0", 
                  "1", 
                  "2", 
                  "3",
                  "4", 
                  "5", 
                  "6", 
                  "7", 
                  "8", 
                  "9", ];

  var upperCase = [  "A",    
                      "B",     
                      "C",     
                      "D",     
                      "E",     
                      "F",     
                      "G",    
                      "H",     
                      "I",     
                      "J",     
                      "K",    
                      "L",     
                      "M",    
                      "N",     
                      "O",    
                     "P",     
                      "Q",     
                      "R",     
                      "S",     
                      "T",    
                      "U",    
                      "V",     
                      "W",     
                      "X",     
                       "Y",     
                       "Z", ];

var LowerCase = [  "a",   
                    "b",   
                    "c",  
                    "d",  
                      "e",   
                      "f",   
                      "g",   
                      "h",   
                      "i",   
                      "j",   
                      "k",   
                      "l",   
                      "m",   
                      "n",   
                      "o",   
                      "p",   
                      "q",   
                      "r",   
                      "s",   
                      "t",   
                      "u",   
                      "v",   
                      "w",   
                      "x",   
                      "y",   
                      "z",];




function generatePassword() {
  var allgivennumbers = [];
  var finalPassword = [];
  var Counter = 0;

  characterLength = prompt(
    "How many characters long would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 Digits"
  );

  if (characterLength > 7 && characterLength < 129); 
  else {
    return "Please choose password length between 8 and 128 digits! \nPress the button to try again!";
  }

  confirmSpecialCharacters = confirm (
    "Would you like to have special characters as part of your password? \nExamples: !'*+,-./:;<=>?@^_`{|}~"
  );

  if (confirmSpecialCharacters) {
    allgivennumbers = allgivennumbers.concat(specialCharacters);
     //  concat() method is used joins two or more things.
    var rand = getRandomnumb(specialCharacters.length);
    finalPassword.push(specialCharacters[rand]);
    Counter++;
  }

  confirmNumbers = confirm (
    "Would you like to have numbers as part of your password?"
  );
  if (confirmNumbers) {
    allgivennumbers= allgivennumbers.concat(numbers);
    var rand = getRandomnumb(numbers.length);
    finalPassword.push(numbers[rand]);
    Counter++;
  }


  confirmUpperCase = confirm (
    "Would you like to have UPPERCASE letters as part of your password?"
  );
  if (confirmUpperCase) {
    allgivennumbers = allgivennumbers.concat(upperCase);
    var rand = getRandomnumb(upperCase.length);
    finalPassword.push(upperCase[rand]);
    Counter++;
  }
confirmLowerCase = confirm (
    "Would you like to have lowercase letters as part of your password?"
  );
  if (confirmLowerCase) {
    allgivennumbers = allgivennumbers.concat(LowerCase);
    var rand = getRandomnumb(LowerCase.length);
    finalPassword.push(LowerCase[rand]);
    Counter++;
  };



  // Final Password generation
  for (i = 0 +Counter; i < characterLength; i++) {
    var rand = getRandomnumb(allgivennumbers.length);
    finalPassword.push(allgivennumbers[rand]);
  }

  
  // Using the 'shuffle' function below regains true randomness for the password.
  shuffle(finalPassword);
  return finalPassword.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);