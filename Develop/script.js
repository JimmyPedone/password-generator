// Assignment Code that generates the button
var generateBtn = document.querySelector("#generate");

//Declaring variables for user input
var enter;
var useUppercase;
var useLowercase;
var useCharacter;
var useNumber;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
