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

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
