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
    speacialChars : false,
    upperChars : false,
    lowerChars : false,
    numberChars : false,
  }

//Prompts user to enter length
var length = window.prompt("Enter required length of password between 8-128 characters")

// Validates input for length of password
if (isNaN(length)) {
  window.alert ("Invalid length. Please retry using a number between 8-128")
}
else if ((length) < 8 || (length) > 128) {
  window.alert ("Invalid length. Please retry using a number between 8-128") 
}
options.lengthOfChars = length;
return ("password")
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
