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
 // function to create pseudo random numbers
function getRandomnum(max){
  return Math.floor(Math.random()* Math.floor(max));

}
var specialcharacters =[ '~','!','#','@','$','%','^','&','*','(',')','_','-','+','=','[',']','{','}','|',';',':','"','<','>',',','.','/','?','*'];

var numbers = ['0','1','2','3','4','5','6','7','8','9'];

var Uppercasealph = [ 'A','B','C','D' ,'E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var Lowercasealph =[ 'a', 'b', 'c', 'd', 'e','f','g','h','i','j', 'k','l','m', 'n' ,'o','p','q','r', 's', 't', 'u', 'v','w','x','y','z'] ;





function generatePassword() {
  var allgivennumbers = [];
  var finalpassword = [];
  var counter = 0;
  characterlenght = prompt ("Please mention the lenght of your password (your pasword should be between 8 and 128 characters");

  if
  (characterlenght > 8 && characterlenght < 128){
  } else {
    return " Please choose password lenght between 8 & 128 characters, Press the button to try again";
  }


  confirmspecialcharacters =  confirm ( "Would you like to include special characters in your password?");
  if (confirmspecialcharacters) {
    allgivennumbers= allgivennumbers.concat(confirmspecialcharacters);
    //  concat() method is used joins two or more things.
     var random = getRandomnum(specialcharacters.lenght);
    finalpassword.push(specialcharacters[random]);
    counter++ ;
  }



  confirmnumbers =  confirm ( "Would you like to include numbers in your password?");
  if (confirmnumbers) {
    allgivennumbers= allgivennumbers.concat(numbers);
     var random = getRandomnum(numbers.lenght);
    finalpassword.push(numbers[random]);
     counter ++ ;
  }

  confirmUppercasealph =  confirm ( "Would you like to include Uppercase in your password?");
  if (confirmUppercasealph) {
    allgivennumbers= allgivennumbers.concat(Uppercasealph);
     var random = getRandomnum(Uppercasealph.lenght);
    finalpassword.push(Uppercasealph[random]);
    counter++ ;
  }

  confirmLowercasealph = confirm ("would you like to include Lowercase in your password?");
  if (confirmLowercasealph) {
    allgivennumbers = allgivennumbers.concat(Lowercasealph);
    var random = getRandomnum(Lowercasealph.length);
    finalpassword.push(Lowercasealph[random]);
    counter++;
  } 
  }

 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;
