// Assignment Code that generates the button
var generateBtn = document.querySelector("#generate");

//Declaring variables for user input
var enter;
var useUppercase;
var useLowercase;
var useCharacter;
var useNumber;
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// Transformation method "map" allows for upper-case conversion
alpha2 = alpha.map(toUpper);

// ---------------------------------------------------------------------------------------------------------------------------------

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Special characters
character = ["*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "!", "#", "$", "%", " ^ ", "&", "'", "@", "[", "\\", "]",  "_", "`", "{", "|", "}", "~"];

// Space is for the Uppercase conversion
space = [];

// ---------------------------------------------------------------------------------------------------------------------------------

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
