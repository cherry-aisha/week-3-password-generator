// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password function//
function generatePassword() {
//Options for Password//
  var options = {
    lengthOfChars : 0,
    specialChars : false,
    upperChars : false,
    lowerChars : false,
    numberChars : false,
  }

//Prompts user to enter length//
var length = window.prompt("Enter required length of password between 8-128 characters")

// Validates input for length of password//
if (isNaN(length)) {
  window.alert ("Invalid length. Please retry using a number between 8-128")
}
else if ((length) < 8 || (length) > 128) {
  window.alert ("Invalid length. Please retry using a number between 8-128") 
}
options.lengthOfChars = length;

//Promts user to select for characters//
var specialChars = confirm ("Would you like to include special characters?");

//Prompts user to select upper-case characters//
var upperChars = confirm ("Would you like to include upper-case characters?");

//Prompts user to select lower-case characters//
var lowerChars = confirm ("Would you like to include lower-case characters?");

//Prompts user to select number characters//
var numberChars = confirm ("Would you like to include numbers?");

//Arrays of characters//
var chars = [];

if (specialChars) {
  chars.push (["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", "'", "|", ",", ".", "?", "\/", "\\", "?"])
}

if (upperChars) {
  chars.push (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
}

if (lowerChars) {
  chars.push (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
}

if (numberChars) {
  chars.push ([0, 1, 2, 3, 4, 5, 6, 7, 8 ,9])
}


return ("password")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
